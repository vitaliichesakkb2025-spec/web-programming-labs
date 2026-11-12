# Лабораторна №5 — розгортання вебсайту

**Виконав:** Чесак Віталій Володимирович, КБ-208.

| Версія | Код / Root Directory | Framework | Build | Output | HTTPS |
|---|---|---|---|---|---|
| HTML/CSS/JS | [lab_5/static](static/) | Other | без збірки | . | [Відкрити HTML](https://chesak-lab5-html.vercel.app/) |
| React + Tailwind 4 | [lab_5/lab_2_react](lab_2_react/) | Vite | npm run build | dist | [Відкрити React](https://chesak-lab5-react.vercel.app/) |

## Підтверджений результат
12.11.2026 обидва існуючі проєкти прив'язано до цього GitHub-репозиторію. Production Branch — main, автоматичне призначення доменів увімкнено. Нових проєктів не створювали.

Окремий [коміт ed30944: DEPLOY v1 → DEPLOY v2](https://github.com/vitaliichesakkb2025-spec/web-programming-labs/commit/ed30944541cf5270b780d33ef9b3fe1b9889b43a) автоматично створив два Production Deployments зі станом READY і source: git:

- [HTML deployment](https://vercel.com/jadeheart2008-1637/chesak-lab5-html/A8CMUyRmrc7TEXjQeKuZ9RgnYaH2).
- [React deployment](https://vercel.com/jadeheart2008-1637/chesak-lab5-react/6kpWGjJBiFbSGHQi2UeSaVztcQ1c).

На обох основних HTTPS-сайтах у браузері перевірено DEPLOY v2. Перевірено широкі й вузькі макети, коментарі JSONPlaceholder (публікація №24), перемикання теми, localStorage та автоматичні форми. Formspree endpoint задано в обох версіях; повідомлень не надсилали.

Попередні лабораторні не змінено.

## Локальний запуск
Статична версія: відкрити static/index.html через HTTP-сервер, наприклад Live Server.

React: перейти в lab_5/lab_2_react, виконати npm ci, npm run dev. Production-збірка: npm run build. node_modules, dist і .vercel у Git не зберігаються.

## Матеріали
- [Звіт із реальними скриншотами та результатами перевірок](REPORT.md).
- [Чекліст](CHECKLIST.md).
- [Короткий захист](DEFENSE.md).
- [Скриншоти](screenshots/).
- [Машиночитані докази Vercel та витяги build logs](evidence.json).
