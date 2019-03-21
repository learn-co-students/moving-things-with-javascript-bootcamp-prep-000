const app = "I don't do much.";

var dodger = document.getElementById('dodger');
var moveDoggerRight = e => {
  if (e.which === 39) {
    var right = parseInt(dodger.style.right.replace('px', ''), 10);
    if (right > 0) dodger.style.right = `${right - 1}px`;
  }
};

document.addEventListener('keydown', moveDoggerRight );