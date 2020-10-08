const app = "I don't do much.";


function moveDodgerLeft(dodger) {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight(dodger) {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}