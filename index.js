const app = "I don't do much."

var dodger = document.getElementById('dodger')



document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(leftNumbers, 10)

  if (right < 360) {
    dodger.style.left = `${right + 1}px`
  }
}
