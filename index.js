const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerRight() {
  var RightNumbers = dodger.style.left.replace('px', '')
  var Right = parseInt(RightNumbers, 10)
 
  if (Right > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerRight()
  }
})