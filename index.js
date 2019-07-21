const app = "I don't do much."
var dodger = document.getElementById('dodger')
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})
function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
}

