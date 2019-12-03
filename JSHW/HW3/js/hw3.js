//1. Если есть блок кода, который нужно использовать несколько раз - самое время вспомнить о функции.
//Объявив её одни раз - можем вызывать по имени столько, сколько нужно.
//2. В функцию передаётся аргумент, что бы удовлетворить запросы параметра функции.

let firstNumber;

while (Number.isNaN(+firstNumber) || !firstNumber){
    firstNumber = prompt('Enter first number below:', '0');
}

let secondNumber;

while (Number.isNaN(+secondNumber) || secondNumber === '' || secondNumber === null){
    secondNumber = prompt('Enter second number below:', '0');
}

const operators = ['+', '-', '*', '/', ':'];

let operator = prompt("Enter operator:");
while (!operators.includes(operator)){
    operator = prompt("Enter operator:");
}

function calculator(firstNumber, secondNumber, operator){
    switch (operator) {
        case "+" : {
            return firstNumber+secondNumber;
            break;
        }
        case '-' : {
            return firstNumber-secondNumber;
            break;
        }
        case '*' : {
            return firstNumber*secondNumber;
            break;
        }
        case ('/'||':') : {
            return firstNumber/secondNumber;
            break;
        }
    }
}

console.log(calculator(+firstNumber, +secondNumber, operator));