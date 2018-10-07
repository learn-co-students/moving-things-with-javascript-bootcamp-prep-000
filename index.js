const app = "I don't do much.";

var dodger = document.getElementById('dodger');

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '');
  var right = parseInt(rightNumbers, 10);
  if (right > 0) {
    dodger.style.left = `${right + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight();
  }
});

