const btnScrollUp = document.getElementById('btn-scroll-up')
const btnScrollDown = document.getElementById('btn-scroll-down')

btnScrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 100,
    behavior: 'smooth'
  })
})
btnScrollDown.addEventListener('click', () => {
  window.scrollTo({
    top: 10000,
    left: 100,
    behavior: 'smooth'
  })
})
