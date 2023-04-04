const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentSlide = 0;

// Add active class to current slide and dot
function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
      dots[index].classList.add('active');
    } else {
      slide.classList.remove('active');
      dots[index].classList.remove('active');
    }
  });
}

// Move to next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

// Move to previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

// Handle dot click event
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  });
});

// Handle button click event
prevBtn.addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
});

// Auto slide
let slideInterval = setInterval(nextSlide, 3000);
