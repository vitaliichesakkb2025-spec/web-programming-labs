# Лабораторна №5 — Розгортання вебсайту

**Дисципліна:** Технології вебпрограмування  
**Виконав:** Чесак Віталій Володимирович, група КБ-208.

## Дві частини лабораторної

| Версія | Код | Root Directory у Vercel | Framework | Build | Output |
|---|---|---|---|---|---|
| HTML + CSS + JS | [static](static/) | `lab_5/static` | Other | без збірки | `.` |
| React + Tailwind 4 | [lab_2_react](lab_2_react/) | `lab_5/lab_2_react` | Vite | `npm run build` | `dist` |

Використано код лабораторної №4, включно з fetch для JSONPlaceholder (варіант 24), Formspree, localStorage, таймером і темами. Раніші папки лаб залишено без змін.

## Опубліковані сайти

| Версія | URL | Статус |
|---|---|---|
| Статичний HTML/JS | https://chesak-lab5-html.vercel.app/ | Production READY, HTTP 200 |
| React/Vite | https://chesak-lab5-react.vercel.app/ | Production READY, HTTP 200; Vite 6.4.5, 39 модулів |

Обидва сайти опубліковані через Vercel API напряму із файлів початкового коміту лаби. **Вони поки не під'єднані до GitHub як Git-проєкти; автоматичні деплої після push ще не перевірено.** Маркер на сайтах поки `DEPLOY v1`.

## Під'єднання GitHub для автоматичних оновлень

- В акаунті Vercel: **Account Settings → Authentication → Login Connections → GitHub**. Це не те саме, що GitHub Connect для агентів.
- Переконайся, що Vercel GitHub App має доступ до `vitaliichesakkb2025-spec/web-programming-labs`.
- У **вже створених** Vercel-проєктах `chesak-lab5-html` і `chesak-lab5-react`: **Settings → Git → Connect Git Repository**. Вибери той самий репозиторій і гілку `main`. Root Directory вистав `lab_5/static` та `lab_5/lab_2_react` відповідно в Settings → Build and Deployment.
- Після під'єднання Git спочатку переконайся, що `DEPLOY v1` відображається на двох сайтах, і лише потім зроби окремий коміт `v1 → v2`, push та зафіксуй два нові Production Deployments.

## Перевірка чинних Vercel-проєктів

**Не створюй проєкти вдруге** — обидва вже існують у Vercel. Відкрий їх у Dashboard і переконайся, що production-адреси відкриваються за HTTPS. У GitHub джерельні файли містяться в папках `lab_5/static` та `lab_5/lab_2_react`.

Якщо репозиторії не видно під час підключення Git, перевір **[Vercel Account Authentication](https://vercel.com/account/settings/authentication)** і GitHub Login Connection, а потім налаштуй Git у кожному проєкті.

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
