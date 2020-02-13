const app = "I don't do much."

var dodger = document.getElementById('dodger')
var speed = 1;

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - speed}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  
  if (left < 360) {
    dodger.style.left = `${left + speed}px`;
  }
}

document.addEventListener('keydown', (key) => {
  console.log(key.which);
  if (key.which === 37) {
    moveDodgerLeft();
  }
  if(key.which === 39) {
    moveDodgerRight();
  }
});