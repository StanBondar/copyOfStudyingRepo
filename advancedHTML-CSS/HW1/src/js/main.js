const menuBtn = document.querySelector('.menu-btn');
const openMenuIcons = document.querySelector('.fa-menu');
const closeMenuIcons = document.querySelector('.fa-close');
const topMenu = document.querySelector('nav');
let tumbler = false;

function displayMenu () {
    if(!tumbler) {
        topMenu.classList.remove('menu-hidden');
        openMenuIcons.classList.add('active-menu-btn');
        closeMenuIcons.classList.remove('active-menu-btn');
    }else{
        topMenu.classList.add('menu-hidden');
        openMenuIcons.classList.remove('active-menu-btn');
        closeMenuIcons.classList.add('active-menu-btn');
    }
    tumbler = !tumbler;
}

// menuBtn.addEventListener('click', displayMenu);
menuBtn.addEventListener('click', displayMenu);