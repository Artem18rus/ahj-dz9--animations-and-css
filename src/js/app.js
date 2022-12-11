/* eslint-disable no-return-assign */
const box = document.querySelector('.box');
const button = document.querySelector('.button');
const blockAnimation = document.querySelector('.block-animation');
const displayAnimNone = document.querySelector('.displayAnimNone');

button.addEventListener('click', () => {
  button.classList.toggle('bdr');

  blockAnimation.classList.toggle('displayAnimNone');
  if (blockAnimation.classList.contains('displayAnimNone')) {
    setTimeout(() => displayAnimNone.style.border = 'none', 800);
  } else {
    displayAnimNone.style.border = '1px solid #E0E0E0';
  }
  box.style.border = '2px dashed #ffffff00';
});
