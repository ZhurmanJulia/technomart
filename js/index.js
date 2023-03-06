const slides = document.querySelectorAll('.slider-item');
const buttonPrev = document.querySelector('.slider-toogle-prev');
const buttonNext = document.querySelector('.slider-toogle-next');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  currentIndex = index;
  const activeSlide = document.querySelector('.slider-item.active');

  document.body.classList.add(`theme-${slides[index].dataset.theme}`);

  activeSlide.classList.remove('active');
  slides[index].classList.add('active');

};

buttonPrev.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex--;
  currentIndex = (currentIndex < 0) ? slidesAmount - 1 : currentIndex;
  onSlideChange(currentIndex);
});

buttonNext.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex++;
  currentIndex = (currentIndex === slidesAmount) ? 0 : currentIndex;
  onSlideChange(currentIndex);
});

const modalOpenBtn = document.querySelector('.log-in-button');
const modal = document.querySelector('.dropdown-form');
const modalCloseBtn = document.querySelector('.dropdown-close');

modalOpenBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
modal.classList.add('is-open');
});

modalCloseBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
  });

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});
