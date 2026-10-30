# Работник — сайт prvb.ru

Сайт HR-агентства «Работник»: генерация трафика кандидатов, рекламные кампании и обработка откликов для закрытия вакансий. Заявки с формы обратной связи попадают в Bitrix24 CRM, посещаемость отслеживается Яндекс.Метрикой.

## Стек

- [React 19](https://react.dev/) + [React Router 8](https://reactrouter.com/) (framework mode, SSR)
- [Vite](https://vite.dev/)
- [GSAP](https://gsap.com/) (ScrollTrigger, SplitText) — анимации
- Обычный CSS по БЭМ, отдельный файл стилей у каждого компонента
- [Vitest](https://vitest.dev/) + Testing Library — тесты

## Быстрый старт

Нужен Node.js 20+.

```bash
npm install
# создайте .env с переменными, см. ниже
npm run dev   # http://localhost:5173
```

### Переменные окружения

| Переменная      | Назначение                                                     |
| --------------- | -------------------------------------------------------------- |
| `VITE_TEST_API` | URL вебхука Bitrix24 (`crm.lead.add`), куда уходят заявки с формы |

Файл `.env` в git не коммитится.

### Цены сети Rabotnik

Цены блока «Площадки и цены» на странице `/rabotnik-network` лежат в `app/components/network-channels/channels-list.ts` (`placementPrices`, `pricesUpdatedAt`). Пакеты на несколько гео (`geoPackages`) считаются автоматически из цен MTV выбранных гео, отдельно их обновлять не нужно.

## Скрипты

| Команда             | Что делает                                       |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | dev-сервер с HMR                                 |
| `npm run build`     | production-сборка в `build/`                     |
| `npm start`         | запуск собранного SSR-сервера (`build/server`)   |
| `npm run typecheck` | генерация типов маршрутов и проверка TypeScript  |
| `npm test`          | тесты Vitest в watch-режиме                      |

## Структура

```
app/
├── root.tsx          # общий layout: навигация, футер, шрифты, Яндекс.Метрика, ErrorBoundary
├── routes.ts         # список маршрутов
├── global.css        # глобальные стили
├── routes/           # страницы (у каждой свой каталог с картинками, стилями и faqList)
└── components/       # переиспользуемые блоки: hero, faq, contact-us, footer и т.д.
                      # тесты лежат рядом, в __tests__/
public/               # статика: картинки, robots.txt, sitemap.xml
```

### Страницы

| Путь                    | Страница                         |
| ----------------------- | -------------------------------- |
| `/`                     | Главная                          |
| `/talent-flow`          | Услуга: поток кандидатов         |
| `/landing-service`      | Услуга: лендинги                 |
| `/lead-processing`      | Услуга: обработка лидов          |
| `/creative-ads`         | Услуга: рекламные креативы       |
| `/ad-management`        | Услуга: ведение рекламы          |
| `/rabotnik-network`     | Услуга: сеть Rabotnik (Telegram, ВКонтакте, MAX) |
| `/tg-network`           | редирект 301 на `/rabotnik-network` |
| `/blog`                 | Блог / список кейсов             |
| `/case-avito-ads`       | Кейс: Avito Pro и Avito Ads      |
| `/case-lead-generation` | Кейс: кадровая лидогенерация     |
| `/contact`              | Контакты                         |
| `/thanks`               | Спасибо за заявку (после отправки формы) |
| `/privacy-policy`       | Политика конфиденциальности      |
| `/consent-page`         | Согласие на обработку ПД         |

## Как добавить страницу

1. Создайте каталог `app/routes/<pageName>/` с компонентом `<pageName>.tsx`.
2. Зарегистрируйте маршрут в `app/routes.ts`.
3. Задайте `<title>` и `<meta name="description">` прямо в JSX страницы (React 19 поднимает их в `<head>`).
4. Добавьте URL в `public/sitemap.xml`.

## Стиль кода

Форматирование — Prettier (`.prettierrc.json`, отступ 3 пробела).
