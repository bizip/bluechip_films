document.getElementById('menu').addEventListener('click', (event) => {
  event.preventDefault();
  const overlay = document.getElementById('popup');
  overlay.classList.remove('hidepopup');
});

document.getElementById('overlayButon').addEventListener('click', (event) => {
  event.preventDefault();
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('hidepopup');
});