const app = "I don't do much."

var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = '#FF69B4'

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }

  if (e.which === 37) {
    moveDodgerLeft()
  }
})
