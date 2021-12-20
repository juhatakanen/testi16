const numberField = document.querySelector('p')
const decreaseBtn = document.querySelector('#decrease')
const resetBtn = document.querySelector('#reset')
const increaseBtn = document.querySelector('#increase')



decreaseBtn.addEventListener("click", function() {
numberField.innerText--
})
resetBtn.addEventListener("click", function() {
numberField.innerText = 0
})
increaseBtn.addEventListener("click", function() {
numberField.innerText++
})