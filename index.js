var dodger = document.getElementById('dodger')
var gameDiv = document.getElementById('game')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left <= 0) { return }
  dodger.style.left = `${left - 10}px`
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left >= (gameDiv.offsetWidth - dodger.offsetWidth)) { return }
  dodger.style.left = `${left + 10}px`
}

document.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    moveDodgerLeft()
  } else if (key.which === 39) {
    moveDodgerRight()
  }
})
