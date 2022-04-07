const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const showBtn = document.querySelector('.show-btn')
const modalContent = document.querySelector('.modal-content')
const modalButtons = document.querySelectorAll('.modal-btns')
showBtn.addEventListener('click', () => {
  modal.style.display = 'block'
  modalContent.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  modalContent.style.display = 'none'
})

modalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none'
    modalContent.style.display = 'none'
  })
})
