//moving things with javascript

//grab the dodger
var dodger = document.getElementById('dodger')
//change its color
dodger.style.backgroundColor = "#000000"
//change it to pink
dodger.style.backgroundColor = "#FF69B4"
//set coordinates
dodger.style.left // "180px"
dodger.style.bottom // "0px"
////move dodger
dodger.style.bottom = '100px'

//move left function
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

//move right function
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left < 360) { //hard coded 400 (window width) - 40 (div width)
    dodger.style.left = `${left + 1}px`
  }
}


//main loop
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight()
  }
})
