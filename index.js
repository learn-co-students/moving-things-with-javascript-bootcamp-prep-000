const app = "I don't do much."

function moveDodgerLeft() {
var rightNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(rightNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}