document.addEventListener('keydown', function(e) {
  console.log(e.which)
})

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight()
  }
  if (e.which === 38) {
    moveDodgerUp()
  }
  if (e.which === 40) {
    moveDodgerDown()
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
  dodger.style.left = `${left - 1}px`
}
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
    if (right > 0) {
  dodger.style.left = `${right + 1}px`
}
}
function moveDodgerUp () {
  var upNumbers = dodger.style.bottom.replace('px', '')
  var up = parseInt(upNumbers, 10)
  dodger.style.bottom = `${up + 1}px`
}
function moveDodgerDown() {
  var downNumbers = dodger.style.bottom.replace('px', '')
  var down = parseInt(downNumbers, 10)
  dodger.style.bottom = `${down - 1}px`
}
