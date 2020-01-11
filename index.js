const app = "I don't do much."
function moveDodgerRight(){
  document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    var rightNumbers = dodger.style.right.replace('px', '')
   var right = parseInt(rightNumbers, 10)

  if (right > 0) {
    dodger.style.right = `${left + 1}px`
  }
}
})
}

function moveDodgerLeft(){
  document.addEventListener('keydown', function(e) {
  if (e.which === 38) {
    var leftNumbers = dodger.style.left.replace('px', '')
   var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
})
}
