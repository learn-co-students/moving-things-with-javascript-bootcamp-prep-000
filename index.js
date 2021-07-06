const app = "I don't do much."
var dodger=document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
var dodger=document.getElementById('dodger');

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left<320) {
    dodger.style.left = `${left+1}px`
  }
}
document.addEventListener('keydown', function(e) {
  switch (e.which) {
    case 37:
      moveDodgerLeft()
      break;
    case 39:
      moveDodgerRight()
      break;
    default:
}});