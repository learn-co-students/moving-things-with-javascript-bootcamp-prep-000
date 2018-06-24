const app = "I don't do much."

var dodger = document.getElementById('dodger');

document.addEventListener ('keydown', function(e){
   console.log(e.which)
  if (e.which === 39){
    moveDodgerRight()
  }
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

function moveDodgerRight(){
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
}
function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}