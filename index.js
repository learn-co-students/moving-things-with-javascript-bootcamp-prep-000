const app = "I don't do much."

var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#000000"

dodger.style.backgroundColor = '#FF69B4'

dodger.style.left 
dodger.style.bottom 

dodger.style.bottom = '100px'

dodger.style.bottom = '0px'

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  console.log(e.which)
})

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }
})

var dodger = document.getElementById('dodger')



document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})