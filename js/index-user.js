const modalOpenBtn = document.querySelector('.button-user');
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
