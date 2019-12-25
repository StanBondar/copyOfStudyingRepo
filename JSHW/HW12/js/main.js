//Теоретический вопрос
//
// Опишите своими словами разницу между функциями setTimeout() и setInterval().
// Что произойдет, если в функцию setTimeout() передать нулевую задержку? Сработает ли она мгновенно, и почему?
// Почему важно не забывать вызывать функцию clearInterval(), когда ранее созданный цикл запуска вам уже не нужен?
//
// 1) setTimeout() откладывает выполнение функции на указанный промежуток времени, в то время как setInterval() повторяет выполнение функции
//через указанный временной интервал.
//
// 2) Если в setTimeout() передать нулевую задержку, то выполнение функции отложится до того момента, пока не будет выполнен весь остальной код.
//
// 3) Вызов функции clearInterval() необходим для оптимизации работы системы, что бы не нагружать её ненужными процессами.


const image = document.querySelector('.image-to-show');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
let counter = 1;

const changingImages = function () {
    $('.image-to-show').fadeOut(300);
    setTimeout(()=>{
        image.setAttribute('src', `./img/${counter}.jpg`);
    }, 300);
    $('.image-to-show').fadeIn(300);
    if (counter === 4) {
        counter = 1;
    } else {
        counter++;
    }
};

const countdownEngine = () => {
    let seconds = 10;
    let milliseconds = 1000;

    let engSecs = setInterval(() => {
        seconds--;
        milliseconds = 1000;
        secs.innerHTML = `${seconds}`;
    }, 1000);

    let engMilliseconds = setInterval(() => {
        milliseconds-=50;
        millisec.innerHTML = `${milliseconds}`;
    }, 50);

    setTimeout(()=>{
        clearInterval(engSecs);
        clearInterval(engMilliseconds);
    }, 10000);
};

const startChanging = () => {
    changer = setInterval(changingImages, 10000);
};

const stopChanging = () => {
    clearInterval(changer);
};

startBtn.addEventListener('click', startChanging);
stopBtn.addEventListener('click', stopChanging);