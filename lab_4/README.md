# Лабораторна №4. JavaScript

Чесак Віталій, КБ-208, варіант 24

Продовження резюме з лаби №3, додав JavaScript.

| Частина | Файли |
|---|---|
| HTML/CSS/JS | `index.html`, `script.js`, `styles.css`, `form-config.js` |
| React + Tailwind | `lab_2_react/` |

## Що зроблено

1. Інформація про браузер і ОС (Navigator, Screen, Window) записується в localStorage і виводиться у футері.
2. Відгуки: 5 коментарів з `https://jsonplaceholder.typicode.com/posts/24/comments`, є кнопка оновлення.
3. Форма зворотного зв'язку відкривається через 1 хвилину, поля: ім'я, email, телефон, повідомлення. Надсилання через Formspree.
4. Тема: світла з 07:00 до 21:00, темна в інший час, є кнопка ручного перемикання.

У React-версії те саме зроблено через `useState` і `useEffect`, компоненти `Reviews`, `ContactForm`, `Footer`.

## Запуск

HTML: відкрити `index.html` через Live Server (через `file://` модулі не працюють).

React:

```
cd lab_4/lab_2_react
npm install
npm run dev
```
