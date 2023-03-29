const navSlide = () => {
  const burger = document.querySelector('.burger', '.link');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('open');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s';
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();



