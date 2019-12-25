const fields = document.querySelectorAll('input');
const eyes = document.querySelectorAll('.fas');
let counter = 0;
let counter2 = 0;

fields.forEach(element => {
    element.setAttribute('data-field-number', `${counter}`);
    counter++;
});

eyes.forEach(element => {
    element.setAttribute('data-eye-number', `${counter2}`);
    counter2++;
});

eyes.forEach(element => {

    element.addEventListener('click', () => {
        if (element.classList.contains('fa-eye-slash')) {
            element.classList.replace('fa-eye-slash', 'fa-eye');
            fields[element.getAttribute('data-eye-number')].setAttribute('type', 'text');
        } else {
            element.classList.replace('fa-eye', 'fa-eye-slash');
            fields[element.getAttribute('data-eye-number')].setAttribute('type', 'password');
        }
    });
});

const btn = document.querySelector('.btn');
let secondWrapper = document.querySelector('.second-wrapper');
let errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
errorMessage.innerText = 'Password is not same';

const checkingData = function () {
    event.preventDefault();
    if (fields[0].value === fields[1].value) {
        errorMessage.remove();
        // console.log(errorMessage);
        if(!document.querySelector('.error-message')){
            setTimeout(()=>{
                alert('You are welcome');
            }, 50);
        }
    } else {
        secondWrapper.appendChild(errorMessage);
    }
};

btn.addEventListener('click', checkingData);