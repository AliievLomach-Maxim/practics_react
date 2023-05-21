# React practices template

Цей проект було створено за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
та налаштування додаткових можливостей
[зверніться до документації](https://facebook.github.io/create-react-app/docs/getting-started).

> Цей проект є демонстраційним прикладом результату, який мають отримати студенти під час практики.

> Приклад коду для кожного зайняття лежить у гілці з відповідною назвою:

> Module-(номер модулю)/Less-(номер уроку)

## Створення репозиторію за шаблоном

Використовуйте цей репозиторій як шаблон для створення репозиторію свого
проекту. 
Для цього натисніть на кнопку `«Use this template»` та оберіть опцію
`«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png) Далі, у
Вас відкриється сторінка створення нового репозиторію. Заповніть поле імені та
переконайтесь, що репозиторій публічний, після цього натисніть кнопку
`«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png) Після
того, як репозиторій буде створено, необхідно перейти до налаштувань цього
репозиторію, а саме: `Settings` > `Actions` > `General`, як показано на
зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Скролимо сторінку до самого низу. Далі, у секції `«Workflow permissions»`
потрібно обрати опцію `«Read and write permissions»` та поставити галочку на
чекбокс. Це необхідно для автоматизації процесу деплоя проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)
Тепер, Ви маєте власний репозиторій проекту, з такою ж самою структурою файлів
та папок, як на шаблоні. Далі, працюйте з ним, як з будь-яким особистим
репозиторієм, клонуйте його мобі на компʼютер, пишіть код, робіть коміти та
відправляйте їх на GitHub.

## Модуль 1

### Урок 1

-   [ ] Створити шаблон проекту з
        [шаблону для ДЗ](https://github.com/goitacademy/react-homework-template#readme)
-   [ ] Налаштувати проект згідно
        [Readme](https://github.com/goitacademy/react-homework-template#readme)
-   [ ] Перевірити деплой
-   [ ] Клонувати проект на ПК
-   [ ] Створити гілку `Module-01/Less-01` для практики

---

-   [ ] Розглянути структуру проекту
-   [ ] Розглянути детально файли `index.js`, `index.css`, `App.jsx`
-   [ ] Почистити файл `App.jsx` щоб він рендерив пустий фрагмент
-   [ ] Відправити файл `users.json` студентам, щоб вони додали його собі. (файл
        містить масив юзерів, який потрібно зарендерити)
-   [ ] Розглянути файл `users.json`, як виглядає, що містить, що маємо
        зарендерити

---

-   [ ] У файлі `App.jsx`, зробити імпорт `users` з файлу `users.json`
-   [ ] Створити компонент `UsersList.jsx`
-   [ ] Зарендерити компонент `UsersList.jsx` в компоненті `App.jsx`
-   [ ] Передати через пропси `users` з компоненту `App.jsx` в компонент
        `UsersList.jsx`. (далі `компонент 1`)
-   [ ] В `компоненті 1`, отримуємо users за допомогою деструктуризації
        пропсів
-   [ ] В рендері `компоненту 1`, створюємо `<ul></ul>`, де запускаємо метод
        `map` по масиву `users`.
-   [ ] На кожній ітерації створюємо `<li></li>`, де як текст має бути імʼя
        юреза.
-   [ ] Дивимось результат в браузері. Вікриваємо консоль та обговорюємо
        помилку.
-   [ ] Фіксимо її. Додаємо пропс `key` зі значенням `id` юзера, елементу
        `<li></li>`.
-   [ ] Дивимось результат в браузері.
-   [ ] Створюємо всередені елементу `<li></li>` теги та наповнюємо їх з даними
        юзера, згідно завдання.
-   [ ] Перевіряємо результат.

---

-   [ ] Створюємо новий компонент `User.jsx` (далі `компонент 2`)
-   [ ] Забираємо розмітку, яку повертає метод `map` в `компоненті 1` та
        додаємо її в рендер `компоненту 2`.
-   [ ] Імпортуємо `компонент 2` в `компонент 1`.
-   [ ] Додаємо рендер `компоненту 2` як результат виконання методу `map`.
-   [ ] Передаємо через пропси `компоненту 2` параметр `user` (елемент
        ітерації методу `map`)
-   [ ] Робимо деструктуризацію `user` з пропсів та глибоку деструктуризацію
        всіх необхідних ключів.
-   [ ] Дивимось результат в браузері. Вікриваємо консоль та обговорюємо
        помилку.
-   [ ] Фіксимо її. Додаємо пропс `key` зі значенням `id` юзера,
        `компоненту 2`.
-   [ ] Дивимось результат в браузері.
-   [ ] Інсталюємо пакет `'prop-types'`
-   [ ] Розписуємо обʼєкт `propTypes` для `компоненту 2`
-   [ ] Розписуємо обʼєкт `propTypes` для `компоненту 1`

---

-   [ ] Виконуємо коміт та пуш в гілку `Module-01/Less-01`
-   [ ] Створюємо `Pull request` на гілку `main`. Мержимо.

---
