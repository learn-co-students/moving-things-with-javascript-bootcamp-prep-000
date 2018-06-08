const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  const method = 'moveDodgerLeft';
  console.log(method, dodger.style.left);
  var leftNumbers = dodger.style.left.replace('', '')
  console.log(method, leftNumbers);
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  const method = 'moveDodgerRight';
  console.log(method);
  var leftNumbers = dodger.style.left.replace('', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left < 360) {
    console.log(method, 'left', dodger.style.left);
    dodger.style.left = `${left + 10}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  else if(e.which === 39) {
    moveDodgerRight()
  }
})