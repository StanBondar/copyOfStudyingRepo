const headingArray = ["Good morning, Victoria!", "I Know, usual you don't like to use English...", "Тому я використовуватиму українську)",
    "Ладно, шучу. Перейдём на русский", "Сегодня особенный день, потому давай вспомним некоторые детали!"];


const questionsAnswers = {
    'Введи дату, когда ты познакомилась со Стасом в формате дд/мм/гг' : '15/12/18',
    'Введи код аеропорта, в который вы летели в тот день' : 'DUS',
    'Как звали СПБ на Вашем рейсе' : 'Стася',
    'Что было на тебе одето снизу по версии твоего жениха?' : 'Юбка',
    'А что было одето на самом деле?' : 'Штаны',
    'Каким номером ты была во время рейса?(Введи цифру)' : '4',
    'Когда Вы первый раз встретились вне работы? (Формат даты дд/мм/гг)' : '29/12/18',
    'Куда Вы ходили на первое свидание?' : 'Кино',
    'Как назывался фильм?' : 'Я ты он она',
    'Кто кого первый поздравил с Новым 2018 годом? (В ответе напиши имя)' : 'Вика',
    'Какую первую выставку вы посетили вместе?' : 'Выставка медуз',
    'Какие цветы тебе подарили на день влюблённых?' : 'Тюльпаны',
    'Место, в котором Вы встретились после твоей поездки на Шри-Ланку?' : 'Проспект',
    'Что ты привезла Стасу из отпуска?' : 'Фрукты',
    'Когда вы признались друг другу в любви? (Формат даты дд/мм/гг)' : '11/10/19',
    'Когда тебе сделали предложение? (Формат даты дд/мм/гг)' : '23/11/19',
    'Где это произошло?' : 'Океанариум',
    'Где Вы праздновали это важное событие?' : 'Пузата Хата',
    'Как считаешь, он тебя любит?' : 'Да',
    'А ты его?' : 'Да'
};

// $('.points-table').hide();

let questions = Object.keys(questionsAnswers);

let headingCounter = 0;
let questionsCounter = -1;
let points = 0;

const statusBar = document.querySelector('.status-bar');
let nextButton = $('<button class="btn next-button">Let`s start?</button>');
let answerButton = $('<button class="btn answer-button">Ответить</button>');
$('.wrapper').append(nextButton.hide().fadeIn(1000));
let heading = $('<h1>Good morning, Victoria!</h1>');
$('.wrapper').prepend(heading.hide().fadeIn(1000));

const innerWrapper = $('<input placeholder="Введи ответ..." class="answer-field"></input>');

//dialog window

const modal = document.createElement('dialog');
dialogPolyfill.registerDialog(modal);
modal.setAttribute('open', 'true');

const section = document.createElement('section');
modal.appendChild(section);

const totalScore = document.createElement('h1');
totalScore.innerText = `Правильных ответов ${points} из ${questions.length}.`;
section.appendChild(totalScore);

const buttonClose = document.createElement('button');
buttonClose.innerText = 'Закрыть';
buttonClose.classList.add('close-score-window');
section.appendChild(buttonClose);

//dialog window

const changeText = function() {
    headingCounter++;
    if(headingCounter<headingArray.length) {
        heading.fadeTo(300, 0);
        setTimeout(() => {
            heading[0].innerText = headingArray[headingCounter]
        }, 300);
        heading.fadeTo(300, 1);
        nextButton[0].innerText = 'Далее';
    }else{
        nextButton.remove();
        heading.after(innerWrapper.hide().fadeIn(500));
        innerWrapper.after(answerButton);
        changeQuestion();
        $('.points-table').show();
    }
};

const checkAnswer = () => {
    if(document.querySelector('.answer-field').value.toLowerCase()===questionsAnswers[questions[questionsCounter]].toLowerCase()){
        points++;
        $('.points-table')[0].innerText = `Правильных ответов ${points} из ${questions.length}`;
        console.log(`Total points: ${points}`);
    };
}



const changeQuestion = function() {
    questionsCounter++;
    statusBar.style.width = `${(document.body.clientWidth*questionsCounter)/20}px`;
    document.querySelector('.answer-field').value = '';
    if(questionsCounter<questions.length) {
        heading.fadeTo(300, 0);
        setTimeout(() => {
            console.log(`Question #${questionsCounter}`);
            heading[0].innerText = questions[questionsCounter];
        }, 300);
        heading.fadeTo(300, 1);
    }
};

nextButton.on('click', changeText);

answerButton.on('click', ()=>{
    if(questionsCounter<20){
        checkAnswer();
        changeQuestion()
    }else {
        totalScore.innerText = `Правильных ответов ${points} из ${questions.length}.`;
        modal.show();
    }
});
window.addEventListener('keydown', (event)=>{
    if(event.key==='Enter') {
        if (questionsCounter < 20) {
            checkAnswer();
            changeQuestion();
        } else {
            totalScore.innerText = `Правильных ответов ${points} из ${questions.length}.`;
            modal.show();
        }
    }
});

document.body.querySelector('.container').appendChild(modal);
buttonClose.addEventListener('click', () => modal.close());

window.addEventListener('load', () => modal.close())