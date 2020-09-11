var searchIco = document.querySelector('.search svg'),
    searchBar = document.querySelector('.search'),
    searchInput = document.querySelector('.search input'),
    stSearchIco = document.querySelector('.streach-ico'),
    stSearchBar = document.querySelector('.streach'),
    body = document.querySelector('body');

searchIco.addEventListener('click', ()=> {
    searchBar.classList.add('streach');
    searchIco.classList.add('streach-ico');
    searchInput.focus();
    if (stSearchIco !== null) {
        stSearchIco.classList.remove('streach-ico');
        stSearchBar.classList.remove('streach');
    }
});
searchInput.addEventListener('blur', ()=> {
    searchBar.classList.remove('streach');
    searchIco.classList.remove('streach-ico');
});

//menu slide
var menu, menuIcon;
menuIcon = document.querySelector('.menu-icon');
menu = document.querySelector('.menu');

menuIcon.addEventListener('click', ()=> {
    menu.classList.toggle('slip');
})

//styling the header
var header = document.querySelector('header');
var headerChildes = document.querySelector('header .opacity-container');
function stylee() {
    header.style.height = headerChildes.clientHeight + 172 + 10 + 'px';
}
stylee();
window.addEventListener('resize', stylee());

// Make a slider
var swiper = new Swiper('.slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true
});
var swiper = new Swiper('.autoplay-slider-bg', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}