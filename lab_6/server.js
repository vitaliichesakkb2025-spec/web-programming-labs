import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import { mkdir, appendFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const HOST = '0.0.0.0';
const PORT = 3000;
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(ROOT, 'public');
const DATA_DIR = path.join(ROOT, 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback.jsonl');

const LIMITS = { name: 80, email: 120, subject: 120, message: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Request body must be a JSON object.' };
  }

  const values = {};
  for (const field of Object.keys(LIMITS)) {
    if (typeof body[field] !== 'string') return { error: `Field "${field}" must be a string.` };
    const value = body[field].trim();
    if (!value) return { error: `Field "${field}" is required.` };
    if (value.length > LIMITS[field]) return { error: `Field "${field}" is too long (max ${LIMITS[field]}).` };
    values[field] = value;
  }

  if (!EMAIL_RE.test(values.email)) return { error: 'A valid email address is required.' };

  // rating: обов'язкове ціле число від 1 до 5
  const rating = typeof body.rating === 'string' && /^\d+$/.test(body.rating.trim())
    ? Number(body.rating.trim())
    : body.rating;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { error: 'Rating must be an integer from 1 to 5.' };
  }

  return { values: { ...values, rating } };
}

const app = new Koa();
const router = new Router();

// помилки тіла запиту (некоректний JSON, завеликий розмір) повертаємо як JSON
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const status = err.status && err.status < 500 ? err.status : 500;
    if (status === 500) console.error(err);
    ctx.status = status;
    ctx.body = {
      ok: false,
      error: status === 413 ? 'Request body is too large.'
        : status === 400 ? 'Request body must be valid JSON.'
        : 'Internal server error.',
    };
  }
});

app.use(bodyParser({ enableTypes: ['json'], jsonLimit: '10kb', strict: true }));

router.post('/api/contact', async (ctx) => {
  if (!ctx.is('application/json')) {
    ctx.status = 400;
    ctx.body = { ok: false, error: 'Content-Type must be application/json.' };
    return;
  }

  const { error, values } = validate(ctx.request.body);
  if (error) {
    ctx.status = 400;
    ctx.body = { ok: false, error };
    return;
  }

  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: values.name,
    email: values.email,
    subject: values.subject,
    message: values.message,
    rating: values.rating,
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(FEEDBACK_FILE, JSON.stringify(record) + '\n', 'utf8');
  } catch (err) {
    console.error('Could not save feedback:', err);
    ctx.status = 500;
    ctx.body = { ok: false, error: 'Internal server error.' };
    return;
  }

  ctx.status = 201;
  ctx.body = { ok: true, message: 'Feedback saved locally.', id: record.id };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(PUBLIC_DIR));

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
