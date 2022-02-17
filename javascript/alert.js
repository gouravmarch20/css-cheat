// parent element 
const alertDangerHide = document.getElementById("alert-danger-hide")
const alertSucessHide = document.getElementById("alert-sucess-hide")
// btn 
const alertSucessBtnClose = document.getElementById("alert-sucess-btn-close")
const alertDangerBtnClose = document.getElementById("alert-danger-btn-close")

alertSucessBtnClose.addEventListener("click", () => {
    alertSucessHide.style.visibility = "hidden"
})
alertDangerBtnClose.addEventListener("click", () => {
    alertDangerHide.style.visibility = "hidden"
})