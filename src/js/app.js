const box = document.querySelector('.box');
const button = document.querySelector('.button');
const displayAnimNone = document.querySelector('.displayAnimNone');

button.addEventListener('click', () => {
  button.classList.toggle('bdr');
  displayAnimNone.classList.toggle('displayAnimNone');
  displayAnimNone.classList.toggle('block-animation');
  box.style.border = '2px dashed #ffffff00';
});
