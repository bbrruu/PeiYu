const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY < 250) {
    navbar.classList.remove('solid')
    navbar.classList.add('navbar-transparent')
  } else {
    navbar.classList.remove('navbar-transparent')
    navbar.classList.add('solid')
  }
})