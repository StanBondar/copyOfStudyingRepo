const index = +prompt("Enter index below: ");

function fibonacciNumberCounting(number, f0, f1) {
    let buffer = 0;
    if(number>0){
        if(number == 1){
            return f1;
        }else{
            buffer = f0+f1;
            f0 = f1;
            f1 = buffer;
            return fibonacciNumberCounting(number-1, f0, f1);
        }
    }else if(number == 0){
        return 0;
    }else {
        if(number == -1){
            return f1;
        }else{
            buffer = f0-f1;
            f0 = f1;
            f1 = buffer;
            return fibonacciNumberCounting(number+1, f0, f1);
        }
    }
}

console.log(fibonacciNumberCounting(index, 0, 1));