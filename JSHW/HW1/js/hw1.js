// Задание
// Реализовать простую программу на Javascript, которая будет взаимодействовать с пользователем с помощью модальных окон браузера - alert, prompt, confirm.
//
//     Технические требования:
//
//     Считать с помощью модельного окна браузера данные пользователя: имя и возраст.
//     Если возраст меньше 18 лет - показать на экране сообщение: You are not allowed to visit this website.
//     Если возраст от 18 до 22 лет (включительно) - показать окно со следующим сообщением: Are you sure you want to continue? и кнопками Ok, Cancel.
//     Если пользователь нажал Ok, показать на экране сообщение: Welcome, + имя пользователя.
//     Если пользователь нажал Cancel, показать на экране сообщение: You are not allowed to visit this website.
//     Если возраст больше 22 лет - показать на экране сообщение: Welcome, + имя пользователя.
//     Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных.
//
//
//     Необязательное задание продвинутой сложности:
//
//     После ввода данных добавить проверку их корректности.
//     Если пользователь не ввел имя, либо при вводе возраста указал не число - спросить имя и возраст заново
//     (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).

    let name = prompt("What is your name?", "Guest");
    let age = +prompt("How old are you?", "1");

    if (name.length<=1){
        name = prompt("What is your name?", "Guest");
    }

    if (Number.isNaN(age)){
        age = +prompt("How old are you?", "1");
    }

    if (age<18){
        alert("You are not allowed to visit this website!");
    }else if(age>=18&&age<=22){
        if(confirm("Are you sure you want to continue?")){
            alert(`Welcome, ${name}`);
        }else{
            alert("You are not allowed to visit this website!");
        }
    }else if (age>22){
        alert(`Welcome, ${name}`);
    }else{
        alert("Incorrect age.");
    }
