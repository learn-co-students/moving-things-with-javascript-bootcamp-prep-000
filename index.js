const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  dodger.style.left = `${left - 10}px`
}
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  dodger.style.left = `${left + 10}px`
}
function moveDodgerUp() {
  var leftNumbers = dodger.style.bottom.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  dodger.style.bottom = `${left - 10}px`
}
function moveDodgerDown() {
  var leftNumbers = dodger.style.bottom.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  dodger.style.bottom = `${left + 10}px`
}


$(document).ready(function() {

  document.addEventListener('keydown', function(e) {
    keys = {
      38: moveDodgerDown,
      40: moveDodgerUp,
      37: moveDodgerLeft,
      39: moveDodgerRight
    }
    var action = keys[e.which]

    if (action) {
      action()
    }
  })
})
