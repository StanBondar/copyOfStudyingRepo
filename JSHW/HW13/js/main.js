// let btn = $('.change-theme');
// const body = document.querySelector('body');
// let tumbler = true;
// btn.click(()=>{
//     if(tumbler) {
//         $('body').addClass('header-dark');
//         $('.description').addClass('description-dark')
//         tumbler = !tumbler;
//     } else {
//         $('body').removeClass('header-dark');
//         $('.description').removeClass('description-dark')
//         tumbler = !tumbler;
//     }
//     setStorage();
// });

const btn = document.querySelector('.change-theme');
const header = document.querySelector('.header');
const description = document.querySelector('.description');
const footer = document.querySelector('.credits');

let themeChanger = function () {
    header.classList.toggle('dark');
    btn.classList.toggle('to-light');
    description.classList.toggle('dark');
    footer.classList.toggle('dark');
    setStorage();
}

function setStorage() {
    if (header.classList.contains('dark')) {
        localStorage.setItem("theme", 'dark');
        localStorage.setItem("btnTheme", 'to-light');
        // localStorage.setItem("descriptionTheme", 'dark');
        // localStorage.setItem("footerTheme", 'dark');
    }else {
        localStorage.removeItem('theme');
        localStorage.removeItem('btnTheme');
        // localStorage.removeItem('descriptionTheme');
        // localStorage.removeItem('footerTheme');
    }
}

function setLastStyle() {
    if(localStorage) {
        // let currentTheme = localStorage.getItem('theme');
        header.classList.add(localStorage.getItem('theme'));
        btn.classList.add('to-light');
        description.classList.add(localStorage.getItem('theme'));
        footer.classList.add(localStorage.getItem('theme'));
    }
}

btn.addEventListener('click', themeChanger);
window.addEventListener('load', setLastStyle);

// localStorage.setItem('bgcolor', getComputedStyle(document.querySelector('header')).getPropertyValue('background-color'));
//
// function getStyles() {
//     localStorage.setItem('bgcolor', getComputedStyle(document.querySelector('header')).getPropertyValue('background-color'));
//     setStyles();
// }
//
// function setStyles() {
//     let currentColor = localStorage.getItem('bgcolor');
//
//     document.getElementById('bgcolor').value = currentColor;
//
//
// }