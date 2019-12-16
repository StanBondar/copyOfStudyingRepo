let icons = document.querySelectorAll('.person-carousel-icon-cover');
let iconsPrevTarget = document.querySelector('.active-icon');
let iconsCoverPrevTarget = document.querySelector('.active-icon-cover');
let mainIcon = document.querySelector('.what-say-person-icon');

const iconsHandler = event => {
    event.target.classList.add('active-icon');
    event.target.parentNode.classList.add('active-icon-cover');
    iconsPrevTarget.classList.remove('active-icon');
    iconsCoverPrevTarget.classList.remove('active-icon-cover');
    iconsCoverPrevTarget = event.target.parentNode;
    iconsPrevTarget = event.target;
    mainIcon.setAttribute('src', event.target.getAttribute('src'));
};

icons[1].addEventListener('click', iconsHandler);