// Теоретический вопрос
//
// Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования
//
//
// Задание
// Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.
//
//     Технические требования:
//
//     Возьмите выполненное домашнее задание номер 4 (созданная вами функция createNewUser()) и дополните ее следующим функционалом:
//
//     При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.
//     Создать метод getAge() который будет возвращать сколько пользователю лет.
//     Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).
//
//
// Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.

// Экранирование - это использование обратного слеша в строках перед спецсимволами для того, что бы интерпретатор не прочитал их как элемент кода.
//Например, экранирование используется перед указанием кавычек в строке, что бы интерпретатор не подумал, что это конец строки, а просто вывел их как символ.

function createNewUser() {
    let newUser = {
        firstName : "FirstName",
        lastName : "LastName",
        birthday : new Date(prompt('Enter your birthday in format mm-dd-yyyy below:')),
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
        getAge : function () {
            const now = new Date();
            this.age = Math.floor((now.getTime()-this.birthday.getTime())/31536000000);
            return this.age;
        },
        getPassword : function () {
            let password = this.firstName[0].toUpperCase()+this.lastName.toLowerCase()+this.birthday.getFullYear();
            return password;
        }

    }
    return newUser;
}

let newUser = createNewUser();
newUser.setFirstName();
newUser.setLastName();
console.log(newUser);
console.log(`Login : ${newUser.getLogin()}`);
console.log(`Age : ${newUser.getAge()}`);
console.log(`Password : ${newUser.getPassword()}`);