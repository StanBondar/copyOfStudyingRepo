//1. Если есть блок кода, который нужно использовать несколько раз - самое время вспомнить о функции.
//Объявив её одни раз - можем вызывать по имени столько, сколько нужно.
//2. В функцию передаётся аргумент, что бы удовлетворить запросы параметра функции.

let firstNumber = +prompt("Enter 1st number below:");

while (Number.isNaN(+firstNumber) || firstNumber === '' || firstNumber === null){
    firstNumber = +prompt('Enter first number below:');
}

let secondNumber = +prompt("Enter 2nd number below:");

while (Number.isNaN(+secondNumber) || secondNumber === '' || secondNumber === null){
    secondNumber = +prompt('Enter second number below:');
}

let operator = prompt("Enter operator:");
while (!'+-*/:'.includes(operator)){
    operator = prompt("Enter operator:");
}


let sumUp = function (first, second) {
    return first+second;
}

let substract = function (first, second) {
    return first-second;
}

let multiply = function (first, second) {
    return first*second;
}

let divide = function (first, second) {
    return first/second;
}

switch (operator){
    case "+" : {
        alert(`Answer: ${sumUp(firstNumber, secondNumber)}`);
        break;
    }

    case "-" : {
        alert(`Answer: ${substract(firstNumber, secondNumber)}`);
        break;
    }

    case "*" : {
        alert(`Answer: ${multiply(firstNumber, secondNumber)}`);
        break;
    }

    case ("/" || ":") : {
        alert(`Answer: ${divide(firstNumber, secondNumber)}`);
        break;
    }
}