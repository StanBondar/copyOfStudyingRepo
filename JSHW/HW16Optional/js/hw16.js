//Рекурсия в программировании - вызов функцией самой себя. Данный приём используется для выполнения сложных задач,
//которые могут быть разбиты на одинаковые подзадачи.
let factorialNumber = prompt("Enter number for factorial calculation below: ", 5);

while (Number.isNaN(+factorialNumber) || factorialNumber === '' || factorialNumber === null){
    factorialNumber = prompt("Enter number for factorial calculation below: ", 5);
}

let factorial = function (number) {
    if (number === 0){
        return 1;
    }else if(number<0){
        return -1;
    }else {
        return number * factorial(number-1);;
    }
}

console.log(factorial(factorialNumber));