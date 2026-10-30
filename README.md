# Генератор форм на Typescript

[![hexlet-check](https://github.com/hardPrecision/react-urfu-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/hardPrecision/react-urfu-project-81/actions)

Библиотека, с помощью которой удобно создавать формы в шаблонах сайтов. Она заметно сокращает код описания формы за счет автоматической обработки ошибок и различных контролов.

Учебный проект Хекслета: https://ru.hexlet.io/


## Стек

- TypeScript

## Установка

Для работы нужны Node.js и npm.

```bash
git clone https://github.com/hardPrecision/react-urfu-project-81.git
cd react-urfu-project-81
npm install
```

## Использование

Сборка TypeScript в JavaScript:

```bash
npm run build
```

Проверка типов без сборки:

```bash
npm run typecheck
```

Исходный код находится в `src`, результат сборки — в `dist`.
Пакет экспортирует класс `HexletCode` по умолчанию. Генерация форм будет добавлена на следующих этапах.

После сборки библиотеку можно подключить в другом локальном проекте:

```bash
npm install ~/react-urfu-project-81
```

```javascript
import HexletCode from '@hexlet/code';
```

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
