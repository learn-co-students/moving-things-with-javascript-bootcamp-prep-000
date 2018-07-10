const app = "I don't do much."
var dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
function moveDodgerRight() {
  var rightNumbers = parseInt(dodger.style.left.replace('px', ''));
  rightNumbers += parseInt(dodger.style.width.replace('px', ''), 10);
 
  if (right < dodger.parentNode.style.width) {
    dodger.style.left = `${left - 1}px`
  }
}