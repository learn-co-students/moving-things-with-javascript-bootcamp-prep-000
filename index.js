var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 2}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

function moveDodgerRight() {
  var rightNumbers = getComputedStyle(dodger, null).right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (right > 0) {
    dodger.style.left = `${left + 2}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})
