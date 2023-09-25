const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.add('animate-slideLeft');
});

const menuIcon = document.getElementById('menu-icon');
const submenu = document.getElementById('submenu');

menuIcon.addEventListener('click', () => {
    submenu.classList.toggle('hidden');
    submenu.classList.toggle('active');
    setTimeout(() => { 
        submenu.classList.add('hidden');
        submenu.classList.remove('active');
    }, 5000)
});

const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');


searchIcon.addEventListener('click', () => {
    
    searchInput.classList.toggle('animate-slideLeft');
    searchInput.classList.toggle('animate-hide')
    setTimeout(() => searchInput.classList.toggle('hidden'), 1000);

});


const btnLeft = document.querySelector('.button-SliderLeft');
const btnRight = document.querySelector('.button-SliderRight');
const sliderPic0 = document.querySelector('.slider-pic-0');
const sliderPic1 = document.querySelector('.slider-pic-1');
const sliderPic2 = document.querySelector('.slider-pic-2');

let count = 0;

function updateStyle(count) {
    switch(count) {
    case 0 : 
        sliderPic0.classList.remove('hidden');
        sliderPic1.classList.add('hidden');
        sliderPic2.classList.add('hidden');
        break;
    case 1: 
        sliderPic0.classList.add('hidden');
        sliderPic1.classList.remove('hidden');
        sliderPic2.classList.add('hidden');
        break;
    case 2: 
        sliderPic0.classList.add('hidden');
        sliderPic1.classList.add('hidden');
        sliderPic2.classList.remove('hidden');
        break;
    default:  
        sliderPic0.classList.remove('hidden');
        sliderPic1.classList.add('hidden');
        sliderPic2.classList.add('hidden');
        break;
    }

}

function clearClassAnimation() {
    sliderPic0.classList.remove('animate-slideRight');
    sliderPic1.classList.remove('animate-slideRight');
    sliderPic2.classList.remove('animate-slideRight');

    sliderPic0.classList.remove('animate-slideLeft');
    sliderPic1.classList.remove('animate-slideLeft');
    sliderPic2.classList.remove('animate-slideLeft');
}

function addClassAnimation(direction) {
    switch(direction) {
        case 'left':  
            sliderPic0.classList.add('animate-slideLeft');
            sliderPic1.classList.add('animate-slideLeft');
            sliderPic2.classList.add('animate-slideLeft');
            break;
        case 'right': 
            sliderPic0.classList.add('animate-slideRight');
            sliderPic1.classList.add('animate-slideRight');
            sliderPic2.classList.add('animate-slideRight');
            break;
        default: break;
    }
}

btnLeft.addEventListener('click', () => {
    clearClassAnimation();
    if(count === 0) {
        count = 2;
    } else {
        count--;
    }
    addClassAnimation('left');
    updateStyle(count)
});
  
btnRight.addEventListener('click', () => {
    clearClassAnimation()
    if(count === 2) {
        count = 0;
    } else {
        count++;
    }
    addClassAnimation('right')
    updateStyle(count)
})

document.addEventListener("DOMContentLoaded", function () {
const grid = document.querySelector('#gallery');
const masonry = new Masonry(grid, {
    itemSelector: '.item',
    percentPosition: true
});

const links = document.querySelectorAll('.image-link');
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const options = {
            type: 'image',
            gallery: {
                enabled: true
            }
        };
        const magnificPopup = new MagnificPopup(options);
        magnificPopup.open({items: [{src: link.getAttribute('href')}]});
    });
});
});

const expandButton = document.getElementById('expandButton');
const gallery = document.getElementById('gallery');

expandButton.addEventListener('click', function () {
    gallery.removeAttribute('style');
    gallery.classList.remove('with-gradient');
    expandButton.classList.add('hidden');
});
