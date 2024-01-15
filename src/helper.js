export function toggleDarkMode(getters, setters) {
  if (getters.darkMode) {
    localStorage.setItem('darkMode', 'false')
    setters.setDarkMode(false)
    setters.setBgColor('#ebebeb')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('darkMode', 'true')
    setters.setDarkMode(true)
    setters.setBgColor('#1f1e1e')
    setters.setFontColor('#e8e6e3')
    document.documentElement.classList.add('dark');
  }
}

export function initDarkMode(setters) {
  if (!localStorage.getItem('darkMode')) {
    localStorage.setItem('darkMode', 'true')
  }
  if (localStorage.getItem('darkMode') === 'true') {
    setters.setDarkMode(true)
    setters.setBgColor('#1f1e1e')
    setters.setFontColor('#e8e6e3')
    document.documentElement.classList.add('dark');
  } else {
    setters.setDarkMode(false)
    setters.setBgColor('#ebebeb')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  }
}


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