// - Считать два числа, `m` и `n`. Вывести в консоль все простые числа (http://ru.math.wikia.com/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE) в диапазоне от `m` до `n`
// (меньшее из введенных чисел будет `m`, бОльшее будет `n`). Если хотя бы одно из чисел не соблюдает условие валидации, указанное выше, вывести сообщение об ошибке, и спросить оба числа заново.

let m = +prompt("Enter first number:");

while (m <= 1) {
    m = +prompt("First number con not be negative or equal to 0. Enter First number again:");
}

let n = +prompt("Enter second number:");

while (n < m || n === m) {
    n = +prompt("Second number can not be less then first. Enter second number again:");
}

for (let i = m; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
        if (i % j === 0&&j!==i) {
            break;
        }else if(j==i){
            console.log(i);
        }
    }
}
