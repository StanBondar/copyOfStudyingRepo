const image = document.querySelector('.image-to-show');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
let counter = 1;
let changer;
// const images = $('.image-to-show');


const changingImages = function () {
    // debugger;
    // countdownEngine();
    // images.eq(counter).fadeOut(1000, images.eq(counter).hide());
    // images[counter].classList.add('inactive');
    image.setAttribute('src', `./img/${counter}.jpg`);
    if (counter === 4) {
        counter = 1;
    } else {
        counter++;
    }
    // images.eq(counter).fadeIn(100);
    // images[counter].classList.remove('inactive');
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
    // countdownEngine();
    changer = setInterval(changingImages, 10000);
};

const stopChanging = () => {
    clearInterval(changer);
};

startBtn.addEventListener('click', startChanging);
stopBtn.addEventListener('click', stopChanging);