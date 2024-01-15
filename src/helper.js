export function animateHeroText() {
    const heroText = document.querySelectorAll('.hero-text-slide');
    const heroIcon = document.querySelector('.portrait')
    const heroLinks = document.querySelectorAll('.hero-link-slide');
    var index = 0
    heroText.forEach((link) => {
      setTimeout(() => {
        link.classList.add('animate');
      }, 100 * (index + 1));
      index += 1
    });
    heroLinks.forEach((link) => {
      setTimeout(() => {
        link.classList.add('animate');
      }, 100 * (index + 1));
      index += 1
    });    
    heroIcon.classList.add('animate');
}

export function animateNavbar() {
  const navLinks = document.querySelectorAll('.navlink-slide');
  var index = 0
  navLinks.forEach((link) => {
    setTimeout(() => {
      link.classList.add('animate');
    }, 100 * (index + 1));
    index += 1
  });
}

export function animateAbout() {
  const navLinks = document.querySelectorAll('.about-slide');
  var index = 0
  navLinks.forEach((link) => {
    setTimeout(() => {
      link.classList.add('animate');
    }, 100 * (index + 1));
    index += 1
  });
}