let tabs = document.querySelectorAll('.tabs-title');
let text = document.querySelectorAll('.tabs-content li');
let indexCounter1 = 0;
let indexCounter2 = 0;

text.forEach(element => {
    element.setAttribute('data-text-number', `${indexCounter2}`);
    element.classList.add('unvisible-text');
    indexCounter2++;
});

tabs.forEach(element => {
    element.setAttribute('data-tab-number', `${indexCounter1}`);
    indexCounter1++;
});

tabs.forEach(tab => {
    tab.addEventListener('click', ()=> {
        tabs.forEach(element => {
            element.classList.remove('active');
        })
        tab.classList.add('active');
        text.forEach(element => {
            element.classList.remove('visible-text');
        });
        text[tab.getAttribute('data-tab-number')].classList.add('visible-text');
    });
});