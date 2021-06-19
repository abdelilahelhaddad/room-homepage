const slides = document.querySelectorAll('.product_Slider');
const slideImage = document.querySelector('.hero_left');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
var bgSlides = ["./images/desktop-image-hero-1.jpg", "./images/desktop-image-hero-2.jpg", "./images/desktop-image-hero-3.jpg"];

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

var bgIndex = 0;
const nextImage = () => {
  if (bgIndex < bgSlides.length - 1) {
    bgIndex++;
    slideImage.style.background = `url(${bgSlides[bgIndex]}) no-repeat center center/cover`;
  } else {
    bgIndex = 0;
    slideImage.style.background = `url(${bgSlides[bgIndex]}) no-repeat center center/cover`;
  }
};

const prevImage = () => {
  if (bgIndex < bgSlides.length && bgIndex > 0) {
    bgIndex--;
    slideImage.style.background = `url(${bgSlides[bgIndex]}) no-repeat center center/cover`;
  } else {
    bgIndex = 2;
    slideImage.style.background = `url(${bgSlides[bgIndex]}) no-repeat center center/cover`;
  }
};

// Button events
next.addEventListener('click', () => {
  nextSlide();
  nextImage();
});

prev.addEventListener('click', () => {
  prevSlide();
  prevImage();
});