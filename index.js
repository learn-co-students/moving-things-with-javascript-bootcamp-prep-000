const app = "I don't do much."

var dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  console.log(e.which)
})

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if(e.which === 39){
    moveDodgerRight()
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight(){
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left < 400) {
    dodger.style.left = `${left + 1}px`
  }
}
