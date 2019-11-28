//Рекурсия в программировании - вызов функцией самой себя. Данный приём используется для выполнения сложных задач,
//которые могут быть разбиты на одинаковые подзадачи.
let factorialNumber = prompt("Enter number for factorial calculation below: ", 5);

while (Number.isNaN(+factorialNumber) || factorialNumber === '' || factorialNumber === null){
    factorialNumber = prompt("Enter number for factorial calculation below: ", 5);
}

let factorial = function (number) {
    let result = 1;
    if (number === 1){
        return result;
    }else {
        result = number * factorial(number-1);
        return result;
    }
}

console.log(factorial(factorialNumber));