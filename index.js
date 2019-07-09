const app = "I don't do much.";

//My code ::::
var dodger = document.getElementById("dodger");

//Moving left::

//Even Listener up arrow
document.addEventListener("keydown", function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }

  if (e.which === 39) {
    moveDodgerRight();
  }
});

// Move function left
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Move function left
function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(rightNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
