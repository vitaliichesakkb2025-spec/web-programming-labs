# Лабораторна №5 — розгортання вебсайту

**Студент:** Чесак Віталій Володимирович, КБ-208.  
**GitHub:** https://github.com/vitaliichesakkb2025-spec/web-programming-labs/tree/main/lab_5

## Частина 1. Статичний HTML/CSS/JavaScript
Root Directory: `lab_5/static`. Framework: Other. Збірка не потрібна.

**Production URL:** https://chesak-lab5-html.vercel.app/ (Production READY, HTTP 200).  
**Скриншот:** _додати реальний скриншот відкритого HTTPS-сайту_.

## Частина 2. React, Vite та Tailwind
Root Directory: `lab_5/lab_2_react`; Framework Vite; Install: `npm install`; Build: `npm run build`; Output: `dist`.

**Production URL:** https://chesak-lab5-react.vercel.app/ (Production READY, HTTP 200; Vite 6.4.5, 39 модулів, build 1,63 с).  
**Скриншот:** _додати реальний скриншот Vercel-сайту_.

## Статус Git-інтеграції

Обидва сайти реально розгорнуто через Vercel API з файлів коміту `e3f2027582ab25c1514df03225aa6ed0bf3a3082`. Vercel повернув стан READY і HTTP 200, React-збірка успішна. Під час спроб зв'язати Vercel-проєкти з GitHub сервер повідомив: `You need to add a Login Connection to your GitHub account first`. Тому автоматичний deployment після push **не налаштований і не підтверджений**.

## Автоматичне оновлення
Перший реліз містить `DEPLOY v1`. Після першої публікації необхідно зробити окремий коміт зміни на `DEPLOY v2`, виконати push і перевірити нові Production Deployments.

**Посилання на коміт:** _додати після реальної зміни v1 → v2 та push_.  
**Підтвердження:** _скриншот Vercel Deployments та оновлених сайтів_.

## Висновок
Статичний HTML/JS і React/Vite-сайти опубліковані на Vercel і доступні за двома HTTPS URL (HTTP 200). React-збірка пройшла успішно. Для завершення демонстрації автоматичного оновлення потрібно прив'язати GitHub до наявних Vercel-проєктів, виконати зміну версії, зафіксувати два нових Production Deployments та додати власні скриншоти.
