// Теоретический вопрос
//
// Опишите своими словами, как Вы понимаете, что такое Document Object Model (DOM)
//
//
// Задание
// Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка.
//
//     Технические требования:
//
//
//     Создать функцию, которая будет принимать на вход массив.
//
//
//     Каждый из элементов массива вывести на страницу в виде пункта списка
//
//
// Необходимо использовать шаблонные строки и функцию map массива для формирования контента списка перед выведением его на страницу.
//
//
//     Примеры массивов, которые можно выводить на экран:
//     ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']
//         ['1', '2', '3', 'sea', 'user', 23]
//
//
// Можно взять любой другой массив.
//
//
//
//     Необязательное задание продвинутой сложности:
//
//     ??? Очистить страницу через 10 секунд. Показывать таймер обратного отсчета (только секунды) перед очищением страницы.
//     Если внутри массива одним из элементов будет еще один массив или объект, выводить его как вложенный список.

//DOM - програмный интерфейс траницы HTML, который представляет её в таком виде, что скрипт может изменять структуру документа.

const testArray = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];

function addingElements(arr){
    let ulist = document.createElement('ul');
    document.body.appendChild(ulist);
    arr.forEach(element => {
        let list = document.createElement('p');
        list.innerText = element;
        ulist.appendChild(list);
    });
}

// addingElements(testArray);