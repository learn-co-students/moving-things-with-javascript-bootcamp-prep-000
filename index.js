var dodger = document.getElementById('dodger');
var game = document.getElementById('game');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var gameWidth = game.offsetWidth;
  var dodgerWidth = dodger.offsetWidth;
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if ( left < ( gameWidth-dodgerWidth ) ) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  console.log(e.which);
  
  if ( e.which === 37 ) {
    moveDodgerLeft()
  }
  else if( e.which === 39 ) {
    moveDodgerRight()
  }
})