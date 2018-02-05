const app = "I don't do much."

$(document).ready(function() {
  
  var dodger = document.getElementById('dodger');

  function moveDodgerLeft() {
    var leftNumber = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumber, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener('keydown', function(e) {
   if (e.which === 37) {
     moveDodgerLeft();
   }
  });

  function moveDodgerRight() {
    var rightNumber = dodger.style.left.replace('px', '');
    var right = parseInt(rightNumber, 10);
    if (right < 360) {
      dodger.style.left = `${right + 1}px`;
    }
  }

  document.addEventListener('keydown', function(e) {
    if (e.which === 39) {
      moveDodgerRight();
    }
  });
});
