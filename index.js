var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNums = dodger.style.left.replace('px', '')
  var left = parseInt(leftNums, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var rightNum = dodger.style.right.replace('px', '')
  var right = parseInt(rightNum, 10)
  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight()
  }
})