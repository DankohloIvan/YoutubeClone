# Видеоплатформа

Учебный проект веб-платформы для загрузки и просмотра видео. Сейчас в репозитории находятся базовые заготовки клиента и API; функции видеоплатформы ещё не реализованы.

## Технологии

- **Backend:** ASP.NET Core Web API, .NET 10, `Microsoft.AspNetCore.OpenApi`.
- **Frontend:** React 19, React DOM, Vite 8, `@vitejs/plugin-react`.
- **Инструмент проверки JavaScript:** Oxlint.

Для запуска frontend нужны Node.js и npm.

## Структура проекта

```text
.
├── Client/                    # React frontend на Vite
│   ├── src/                   # React-приложение
│   ├── package.json
│   └── vite.config.js
├── Controllers/               # Контроллеры ASP.NET Core Web API
│   └── TaskController.cs
├── Program.cs                 # Настройка и запуск API
└── Task.csproj                # Проект ASP.NET Core
```

## Локальный запуск

### Backend

Из корня репозитория выполните:

```powershell
dotnet run
```

API запускается по адресу `http://localhost:5111`. Текущий проверочный маршрут: `GET http://localhost:5111/api/task`. В режиме Development OpenAPI-документ доступен по адресу `http://localhost:5111/openapi/v1.json`.

### Frontend

В отдельном терминале:

```powershell
cd Client
npm install
npm run dev
```

Vite выведет адрес frontend в терминал; по умолчанию это `http://localhost:5173`.

Во время разработки frontend и backend запускаются отдельно, каждый в своём терминале. Сейчас клиент ещё не отправляет запросы к API.

## Распределение работы

- **Frontend:** React, страницы, компоненты, стили и взаимодействие с API.
- **Backend:** ASP.NET Core, API, модели, работа с данными и серверная логика.

## Уже реализовано

- Базовая страница React/Vite со счётчиком из стартового шаблона.
- Проверочный `GET /api/task`, возвращающий статус API.
- Генерация OpenAPI-документа в Development.

## Planned

- Загрузка и просмотр видео.
- Связь frontend с API и хранение данных.
