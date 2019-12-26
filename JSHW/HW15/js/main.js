$('.slideToggle.first').on('click', function () {
    $('.slideToggle.first ~ div').slideToggle('slow');
});

$('.slideToggle.second').on('click', function () {
    $('.slideToggle.second ~ div').slideToggle('slow');
});

const button = $('.scroll-top');

$(window).scroll(() => {
    const windowHeight = $(window).innerHeight();
    const offsetTop = $(window).scrollTop();

    if (offsetTop > windowHeight) {
        button.fadeIn();
    } else {
        button.fadeOut();
    }

});

button.click(() => {
    // console.log(document.body.parentElement.scrollTop);
    $(document.body.parentElement).animate({scrollTop: 0}, 1000);
});

$('.top-menu-point-link').on('click', function () {
    $(document.body.parentElement).animate({scrollTop: $(`a[data-position='${$(this).attr('data-position-index')}']`)[0].offsetTop}, 1000);
    console.log($(`a[data-position='${$(this).attr('data-position-index')}']`)[0].offsetTop);
});