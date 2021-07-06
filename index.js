const app = "I don't do much."

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if (left < 360/* width of game - width of dodger*/) {
    dodger.style.left = `${left + 10}px`;
  }
}

function mover(){
  document.addEventListener('keydown', function(e) {
    console.log(e.which);
    if (e.which === 37) {
      moveDodgerLeft();
    }else if (e.which === 39){
      moveDodgerRight();
    }
  });
}
mover();
