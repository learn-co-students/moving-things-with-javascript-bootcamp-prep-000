// Notes only - this does not work yet ... Ideas are right.
const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;

var gameInterval = null;

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }
  else if(e.which === 39) {
  	moveDodgerRight();
  } 
});


function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left < 380) {
    dodger.style.left = `${left a + 1}px`;
  }
}


