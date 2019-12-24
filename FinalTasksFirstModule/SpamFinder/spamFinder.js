const checkSpamBtn = document.querySelector('#send-comment');
const result = document.querySelector('#spam-check-result');
const spamLimit = 3;
let comment = document.querySelector('#comment');
let spamWord = document.querySelector('#spam-word');

function isSpam(comment, spamWord, spamLimit) {
    let counter = 0;
    let lastIndex = 0;

    while (comment.value.includes(spamWord.value, lastIndex)){
        if(comment.value.includes(spamWord.value, lastIndex)){
            lastIndex = comment.value.indexOf(spamWord.value, lastIndex)+1;
            counter++;
        }
    }

    if(counter>=3){
        return true;
    }else {
        return false;
    }
};

checkSpamBtn.addEventListener('click', ()=>{
    result.innerText = `Result is ${isSpam(comment, spamWord, spamLimit)}`;
});