// Теоретический вопрос
//
// Опишите своими словами как работает цикл forEach.
//
//
//     Задание
// Реализовать функцию фильтра массива по указанному типу данных.
//
//     Технические требования:
//
//     Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
//     Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом.
//     То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].

//Для начала forEach не считается циклом. Это метод массива, который поочерёдно перебирает элементы массива и проводин с ними указанную в callback function операцию

function filterBy(array, dataType) {
    let newArray = array.filter(element => typeof element!== dataType);
    return newArray;
}

function ownFilterBy(array, dataType){
    let newArray = [];
    array.forEach(element => {
        if(typeof element !== dataType){
            newArray.push(element);
        }
    });
    return newArray;
}

let array = ['hello', 'world', 23, '23', null];
let dataType = 'string';

console.log(filterBy(array, dataType));
console.log(ownFilterBy(array, dataType));