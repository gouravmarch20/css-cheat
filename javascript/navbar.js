console.log('first')
const mobileNav = document.querySelector('.mobile-navbar-btn')
const navHeader = document.querySelector('.trend-nav-header')
const toggleNavbar = () => {
  navHeader.classList.toggle('active')
}
mobileNav.addEventListener('click', () => toggleNavbar())
