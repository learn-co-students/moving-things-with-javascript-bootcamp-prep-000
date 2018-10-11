const app = "I don't do much."

var dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }
  
  if (e.which === 38) {
    moveDodgerUp();
  }
  
  if (e.which === 39) {
    moveDodgerRight();
  }
  
  if (e.which === 40) {
    moveDodgerDown();
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
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace('px', '');
  var bottom = parseInt(bottomNumbers, 10);
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}

function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace('px', '');
  var bottom = parseInt(bottomNumbers, 10);
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
}
