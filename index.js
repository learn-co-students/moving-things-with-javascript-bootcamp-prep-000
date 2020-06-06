const app = "I don't do much."

const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '')
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
    dodger.style.left = `${left - 5}px`
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
  if(left < 360) {
    dodger.style.left = `${left + 5}px`
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
