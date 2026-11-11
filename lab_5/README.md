# Лабораторна №5 — Розгортання вебсайту

**Дисципліна:** Технології вебпрограмування  
**Виконав:** Чесак Віталій Володимирович, група КБ-208.

## Дві частини лабораторної

| Версія | Код | Root Directory у Vercel | Framework | Build | Output |
|---|---|---|---|---|---|
| HTML + CSS + JS | [static](static/) | `lab_5/static` | Other | без збірки | `.` |
| React + Tailwind 4 | [lab_2_react](lab_2_react/) | `lab_5/lab_2_react` | Vite | `npm run build` | `dist` |

Використано код лабораторної №4, включно з fetch для JSONPlaceholder (варіант 24), Formspree, localStorage, таймером і темами. Раніші папки лаб залишено без змін.

## Публікація на Vercel

1. Увійди на [Vercel](https://vercel.com), підключи GitHub.
2. **Add New → Project**: вибери репозиторій `vitaliichesakkb2025-spec/web-programming-labs`.
3. Перший проєкт `chesak-lab5-html`: Root Directory → `lab_5/static`, Framework → **Other**, Build Command → порожня, Output Directory → `.`. Натисни Deploy.
4. Створи **другий** Vercel-проєкт `chesak-lab5-react` із **того самого** GitHub-репозиторію: Root Directory → `lab_5/lab_2_react`, Framework → **Vite**, Install → `npm install`, Build → `npm run build`, Output → `dist`. Натисни Deploy.
5. Перевір обидва HTTPS-посилання, перехід по меню, коментарі API, світлу/темну тему та форму Formspree. Зроби скриншоти.
6. **Тільки після першої публікації** заміни `DEPLOY v1` на `DEPLOY v2` в `static/index.html`, `lab_2_react/src/components/Header.jsx`, `lab_2_react/src/components/Footer.jsx`. Зроби коміт, push і перевір нові Production Deployments.
7. Запиши два URL та посилання на коміт у фінальний звіт і додай свої скриншоти.

**Чому дві папки?** У межах одного GitHub-репозиторію кожен Vercel-проєкт має власний Root Directory. Так не потрібно переносити `index.html` у корінь усього репозиторію.

## Запуск локально

Статичний сайт: `lab_5/static/index.html` через Live Server.

React запускай через Vite, а не Live Server:

```powershell
cd lab_5/lab_2_react
npm install
npm run dev
npm run build
```

`node_modules`, `dist`, `.vercel` не зберігай у Git.

## Документи

- [Чекліст здачі](CHECKLIST.md)
- [Короткий захист](DEFENSE.md)
- [Стислий звіт](REPORT.md)

Публічні URL і факт автоматичного деплою зазначаються лише після реальної перевірки, без вигаданих скриншотів.
