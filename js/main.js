const handleScroll = () => {
  const navbar = document.querySelector('.header__nav');
  const scrollTop = window.pageYOffset
  || document.documentElement.scrollTop || document.body.scrollTop || 0;

  const popupElement = document.getElementById('popup');
  if (scrollTop >= document.querySelector('.about').offsetTop && popupElement.classList.contains('hidepopup')) {
    navbar.classList.add('fixed');
    if (popupElement.classList.contains('hidepopup')) {
      document.getElementById('logo').style.display = 'block';
    } else {
      document.getElementById('logo').style.display = 'none';
    }
  } else {
    document.getElementById('logo').style.display = 'block';
    navbar.classList.remove('fixed');
  }
};
window.addEventListener('scroll', handleScroll);

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
