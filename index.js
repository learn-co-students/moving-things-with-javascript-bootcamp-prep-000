// This works !!  ... Ideas are right.

var dodger = document.getElementById('dodger');

// make it tall, pink so easy to see ...
dodger.style.height = '200px';
dodger.style.backgroundColor = '#FF69B4';


/* initial position, middle
dodger.style.left // "180px"
dodger.style.bottom // "0px"
 
Because the bg is 400px across and the dodger 'width' is 40px as defined in index.css
*/

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  
  // don't let it go left of 0 ...
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  // don't let it go right of 360 ...
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }
  else if(e.which === 39) {
  	moveDodgerRight();
  } 
});

