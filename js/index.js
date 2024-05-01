const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let slideIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 20}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % 5;
  showSlide(slideIndex);
}

function prevSlide() {
    if (slideIndex === 0) {
      slideIndex = 4;
    } else {
      slideIndex--;
    }
    showSlide(slideIndex);
  }

function selectSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => selectSlide(i));
});

setInterval(nextSlide, 4000);