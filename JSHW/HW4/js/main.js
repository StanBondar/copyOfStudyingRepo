"use strict";

// ## Теоретический вопрос
//
// 1. Опишите своими словами, что такое метод обьекта
//
// ## Задание
//
// Реализовать функцию для создания объекта "пользователь".
//
//     #### Технические требования:
// - Написать функцию `createNewUser()`, которая будет создавать и возвращать объект `newUser`.
// - При вызове функция должна спросить у вызывающего имя и фамилию.
// - Используя данные, введенные пользователем, создать объект `newUser` со свойствами `firstName` и `lastName`.
// - Добавить в объект `newUser` метод `getLogin()`, который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, `Ivan Kravchenko → ikravchenko`).
// - Создать пользователя с помощью функции `createNewUser()`. Вызвать у пользователя функцию `getLogin()`. Вывести в консоль результат выполнения функции.
//
//     #### Необязательное задание продвинутой сложности:
//     - Сделать так, чтобы свойства `firstName` и `lastName` нельзя было изменять напрямую. Создать функции-сеттеры `setFirstName()` и `setLastName()`, которые позволят изменить данные свойства.
//
//     #### Литература:
// - [Объекты как ассоциативные массивы](https://learn.javascript.ru/object)
// - [Object.defineProperty()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

//Метод объекта - функция, которая является значением свойства объекта.

function createNewUser() {
    let newUser = {
        firstName : "FirstName",
        lastName : "LastName",
        getLogin : function () {
            let login = this.firstName.charAt(0)+this.lastName;
            return login.toLowerCase();
        },
        setFirstName : function () {
            this.firstName = prompt('Enter first name below:');
        },
        setLastName : function () {
            this.lastName = prompt('Enter last name below: ');
        },
    }
    return newUser;
}

let newUser = createNewUser();

console.log(newUser.getLogin());
