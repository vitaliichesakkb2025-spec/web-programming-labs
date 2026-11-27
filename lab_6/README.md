# Лабораторна №6. Node.js

Чесак Віталій, КБ-208, варіант 24: фреймворк **Koa**, додаткове поле **rating** (ціле число від 1 до 5).

Сервер віддає сайт-резюме з папки `public/` і приймає форму зворотного зв'язку на `POST /api/contact`. Звернення зберігаються у `data/feedback.jsonl` (папка поза `public/`, файл у `.gitignore`).

## Запуск

```
cd lab_6
npm install
npm start
```

Сайт: http://localhost:3000. З іншого пристрою в тій самій мережі: `http://<IP комп'ютера>:3000`.

## Перевірка через curl

```
curl -i -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"subject\":\"Lab 6\",\"message\":\"Local persistence test\",\"rating\":5}"
```
