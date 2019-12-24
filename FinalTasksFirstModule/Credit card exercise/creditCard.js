let pinCode = document.querySelector('#pin-code');
let howManyCash = document.querySelector('#money-sum');
const completeTransactionBtn = document.querySelector('#get-cash');
const result = document.querySelector('#cash-request-result');

let creditCard = {
  amount: 10000,
    pin: 1234,
    attempts: 3,
    status: 'active',
    getCash: function (pinCode, howManyCash) {
        if(this.status === 'disabled'){
            return 'Ваша карта заблокирована, обратитесь в банк для ее разблокировки';
        }
        if (pinCode!==this.pin){
            this.attempts--;
            if(this.attempts>0){
                return `Неправильный пин-код! Попробуйте пожалуйста снова! Осталось количество попыток: ${this.attempts}`;
            }else {
                this.status = 'disabled';
                return 'Неправильный пин-код! Вы исчерпали количество попыток. Ваша карта заблокирована, обратитесь в банк для ее разблокировки';
            }
        }else{
            this.attempts = 3;
            if(howManyCash<this.amount){
                this.amount-=howManyCash;
                return `Получите ваши ${howManyCash} сумма, которую человек хочет снять. Остаток: ${this.amount}`;
            }else {
                return 'К сожалению, на вашем счету недостаточно средств';
            }
        }
    }
};

completeTransactionBtn.addEventListener('click', ()=>{
    result.innerText = creditCard.getCash(+pinCode.value, +howManyCash.value);
});