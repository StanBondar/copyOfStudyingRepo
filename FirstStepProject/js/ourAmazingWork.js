// let switcher = 1;
// const imagesPathTemplate = {
//     0: `./img/graphicDesign/graphic-design${switcher}.jpg`
//     //     [
//     //     // './img/amazingWork/graphic-design1.jpg',
//     //     // './img/amazingWork/graphic-design2.jpg',
//     //     // './img/amazingWork/graphic-design3.jpg',
//     //     './img/amazingWork/graphic-design4.jpg',
//     //     './img/amazingWork/graphic-design5.jpg',
//     //     './img/amazingWork/graphic-design6.jpg',
//     //     './img/amazingWork/graphic-design7.jpg',
//     //     './img/amazingWork/graphic-design8.jpg',
//     //     './img/amazingWork/graphic-design9.jpg',
//     //     './img/amazingWork/graphic-design10.jpg',
//     //     './img/amazingWork/graphic-design11.jpg',
//     //     './img/amazingWork/graphic-design12.jpg'
//     // ]
//     ,
//     1: `./img/webDesign/web-design${switcher}.jpg`
//     //     [
//     //     // './img/amazingWork/web-design1.jpg',
//     //     // './img/amazingWork/web-design2.jpg',
//     //     // './img/amazingWork/web-design3.jpg',
//     //     './img/amazingWork/web-design4.jpg',
//     //     './img/amazingWork/web-design5.jpg',
//     //     './img/amazingWork/web-design6.jpg',
//     //     './img/amazingWork/web-design7.jpg'
//     //
//     // ]
//     ,
//     2: `./img/landingPage/landing-page${switcher}.jpg`
//     //     [
//     //     // './img/amazingWork/landing-page1.jpg',
//     //     // './img/amazingWork/landing-page2.jpg',
//     //     // './img/amazingWork/landing-page3.jpg',
//     //     './img/amazingWork/landing-page4.jpg',
//     //     './img/amazingWork/landing-page5.jpg',
//     //     './img/amazingWork/landing-page6.jpg',
//     //     './img/amazingWork/landing-page7.jpg'
//     // ]
//     ,
//     3: `./img/wordpress/wordpress${switcher}.jpg`
//     //     [
//     //     // './img/amazingWork/wordpress1.jpg',
//     //     // './img/amazingWork/wordpress2.jpg',
//     //     // './img/amazingWork/wordpress3.jpg',
//     //     './img/amazingWork/wordpress4.jpg',
//     //     './img/amazingWork/wordpress5.jpg',
//     //     './img/amazingWork/wordpress6.jpg',
//     //     './img/amazingWork/wordpress7.jpg',
//     //     './img/amazingWork/wordpress8.jpg',
//     //     './img/amazingWork/wordpress9.jpg',
//     //     './img/amazingWork/wordpress10.jpg'
//     // ]
// };

// let allCategoriesGallery = document.querySelectorAll('.amazing-work-gallery-image');
const loadMoreBtn = document.querySelector('.load-more-button');
const loadingAnimation = document.querySelector('.lds-ellipsis');
const insertingTarget = document.querySelector('.amazing-work-gallery-wrapper');
const galleryTabs = document.querySelector('.amazing-work-tabs');
let buttonPressCounter = 0;

const switchTab = event => {
    if (event.target.classList.contains('amazing-work-tab')) {
        let allAddedItems = document.querySelectorAll('.amazing-work-gallery-item-wrapper');
        let lastActiveTab = document.querySelector('.amazing-active-tab');
        lastActiveTab.classList.remove('amazing-active-tab');
        event.target.classList.add('amazing-active-tab');
        let activeTabCategory = +event.target.getAttribute('data-image-category');

        if (activeTabCategory === 99) {
            allAddedItems.forEach(element => {
                if (element.classList.contains('hidden-item')) {
                    element.classList.remove('hidden-item');
                }
            });
        } else {
            allAddedItems.forEach(element => {
                if (+element.querySelector('img').getAttribute('data-image-category') !== activeTabCategory) {
                    element.classList.add('hidden-item');
                } else {
                    if (element.classList.contains('hidden-item')) {
                        element.classList.remove('hidden-item');
                    }
                }
            });
        }
    }
};

const loadMorePictures = () => {
    const currentActiveTab = document.querySelector('.amazing-active-tab');
    const category = +currentActiveTab.getAttribute('data-image-category');
    let allAddedItems = document.querySelectorAll('.amazing-work-gallery-item-wrapper');
    let imageAmount = allAddedItems.length;

    let shownImageAmount = 0;

    allAddedItems.forEach(element => {
        if (!element.classList.contains('hidden-item')){
            shownImageAmount++;
        }
    });

    if (category === 99) {
        let switcher = shownImageAmount / 4 + 1;//switcher === 4;
        console.log(switcher);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                let imagesPathTemplate = {
                    0: `./img/graphicDesign/graphic-design${switcher}.jpg`,
                    1: `./img/webDesign/web-design${switcher}.jpg`,
                    2: `./img/landingPage/landing-page${switcher}.jpg`,
                    3: `./img/wordpress/wordpress${switcher}.jpg`
                };
                let galleryItemTemplate = `<div class="amazing-work-gallery-item-wrapper">
                <img src=${imagesPathTemplate[j]} data-image-category="${j}" alt="" class="amazing-work-gallery-image">
                <div class="amazing-work-gallery-item-hover">
                    <div class="amazing-icons-wrapper">
                        <div class="amazing-icon-inner-wrapper">
                            <i class="fa fa-link"></i>
                        </div>
                        <div class="amazing-icon-inner-wrapper">
                            <i class="fa fa-search"></i>
                        </div>
                    </div>
                    <div class="amazing-text-wrapper">
                        <h2 class="amazing-text-title">creative design</h2>
                        <h2 class="amazing-text-category" data-image-category="${j}">Graphic Design</h2>
                    </div>
                </div>
            </div>`;
                insertingTarget.insertAdjacentHTML('beforeend', galleryItemTemplate);
            }
            switcher++;
        }

    } else {
        let switcher = shownImageAmount + 1;
        console.log(switcher);
        for (let i = 0; i < 12; i++) {
            let imagesPathTemplate = {
                0: `./img/graphicDesign/graphic-design${switcher}.jpg`,
                1: `./img/webDesign/web-design${switcher}.jpg`,
                2: `./img/landingPage/landing-page${switcher}.jpg`,
                3: `./img/wordpress/wordpress${switcher}.jpg`
            };
            let galleryItemTemplate = `<div class="amazing-work-gallery-item-wrapper">
                <img src=${imagesPathTemplate[category]} data-image-category="${category}" alt="" class="amazing-work-gallery-image">
                <div class="amazing-work-gallery-item-hover">
                    <div class="amazing-icons-wrapper">
                        <div class="amazing-icon-inner-wrapper">
                            <i class="fa fa-link"></i>
                        </div>
                        <div class="amazing-icon-inner-wrapper">
                            <i class="fa fa-search"></i>
                        </div>
                    </div>
                    <div class="amazing-text-wrapper">
                        <h2 class="amazing-text-title">creative design</h2>
                        <h2 class="amazing-text-category" data-image-category="${category}">Graphic Design</h2>
                    </div>
                </div>
            </div>`;
            insertingTarget.insertAdjacentHTML('beforeend', galleryItemTemplate);
            switcher++;
        }
        // switcher = 4;
    }
    buttonPressCounter++;
    if(buttonPressCounter==2){
        loadMoreBtn.hidden = true;
    }
};

const loadMoreDelay = () => {
    loadMoreBtn.hidden = true;
    loadingAnimation.hidden = false;
    setTimeout(() => {
        loadMoreBtn.hidden = false;
        loadingAnimation.hidden = true;
        loadMorePictures();
    }, 2000);
};

loadingAnimation.hidden = true;

galleryTabs.addEventListener('click', switchTab);
loadMoreBtn.addEventListener('click', loadMoreDelay);
