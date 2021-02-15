const app = "I don't do much."

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

//Think about what needs to change to make a moveDodgerRight() function. 
//We'll need another e.which in the event listener, and 
// instead of moving the dodger ${left - 1}px, we'll be moving it ${left + 1}px (or ${right - 1}px, if you prefer). 
// To prevent the dodger from escaping off the right-hand side, you can make sure that dodger.style.right is always greater than 0px.

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  
  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which == 26) {
    moveDodgerRight()
  }
 });