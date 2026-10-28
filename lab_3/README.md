# Лабораторна робота №3 — Робота з CSS

**Студент:** Чесак Віталій Володимирович, **група:** КБ-208.

## Частина 1 — HTML + CSS

Файли `index.html` і `styles.css`. Запуск: відкрити `index.html` у браузері або через Live Server у VS Code.

Виконані вимоги методички: **external** (`styles.css`), **internal** (`<style>` у `<head>`) і **inline** (`style=` у абзаці) CSS; селектори `body`, `.panel`, `#contacts`, `a[target="_blank"]`; псевдокласи `:hover`, `:focus-visible`, `:active`; `box-sizing`, `margin`, `padding`, `border`; `display: grid` і `display: flex`; медіазапити `900px`, `580px`.

## Частина 2 — React + Tailwind CSS 4

Відкрийте папку **`lab_2_react`** (це копія React-проєкту з лаби №2, щоб зберегти попередню роботу):

```bash
cd lab_3/lab_2_react
npm install
npm run dev
```

Адреса: http://localhost:5173. Зупинити сервер: `Ctrl+C`. Для production-збірки: `npm run build`.

Tailwind v4: пакети `tailwindcss`, `@tailwindcss/vite` у `package.json`; плагін у `vite.config.js`; `@import "tailwindcss";` в `src/index.css`. Токени кольорів визначено через `@theme`. Усі компоненти оформлено **utility-класами без App.css**; є адаптивність і hover-ефекти.

> Потрібне підключення до інтернету під час першого `npm install`. Папку `node_modules` у репозиторій не додавати.

## Перевірка

1. HTML-сторінка: десктопна та мобільна ширина.
2. React: запуск, наявність усіх секцій; перевірка адаптивності; `npm run build`.
3. При здачі додати власні скріншоти локального React у звіт після першого успішного запуску, якщо викладач їх вимагає.
