const app = "I don't do much."

var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = '#FF69B4'

dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e) {
  console.log(e.which)
  if (e.which == 37) {
    moveDodgerLeft()
  }
  else if (e.which == 39) {
    moveDodgerRight()
  }
})

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 20}px`
  }
}

function moveDodgerRight() {
  // dodger is 40px in width
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (left < 400-40) {
    dodger.style.left = `${left + 20}px`
  }
}
