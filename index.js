const app = "I don't do much."


function moveDodgerLeft() {
  // removes the px from the left value
  var leftNumbers = dodger.style.left.replace('px', '');
  // make the value a number and tells it to go by 10's
  var left = parseInt(leftNumbers, 10);
  // if the item hasn't hit the edge it moves one px
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  // removes 'px' from the value returned
  var leftNumbers = dodger.style.left.replace('px', '');
  // makes it an int and tells it to go by 10's
  var left = parseInt(leftNumbers, 10);
  // if dodger hits the right side it stops
  if (left !== 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
// create an event listener for key down of the id dodger
document.addEventListener('keydown', function(keys) {
  var dodger = document.getElementById('dodger');
  // if left key is pressed
  if (keys.which === 37) {
    // run function
    moveDodgerLeft();
  // if right key is pressed
  } if (keys.which === 39) {
    // run function
    moveDodgerRight();
  }
});
