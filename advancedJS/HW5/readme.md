## Задание

Получить список фильмов серии `Звездные войны`, и вывести на экран список персонажей для каждого из них.

#### Технические требования:
- Отправить AJAX запрос по адресу `https://swapi.co/api/films/` и получить список всех фильмов серии `Звездные войны`
- Для каждого фильма получить с сервера список персонажей, которые были показаны в данном фильме. Список персонажей можно получить из свойства `characters`.
- Как только с сервера будет получена информация о фильмах, сразу же вывести список всех фильмов на экран. Необходимо указать номер эпизода, название фильма, а также короткое содержание (поля `episode_id`, `title` и `opening_crawl`).
- Как только с сервера будет получена информация о персонажах какого-либо фильма, вывести эту информацию на экран под названием фильма.
- Все запросы на сервер необходимо выполнить с помощью `XMLHttpRequest`.

#### Необязательное задание продвинутой сложности
 - Пока загружаются персонажи фильма, прокручивать под именем фильма анимацию загрузки. Анимацию можно использовать любую. Желательно найти вариант на чистом CSS без использования JavaScript.