
function moveLeft(dodger) {
  let leftNumber = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumber, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveRight(dodger) {
  let leftNumber = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumber, 10);
  
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}


const dodger = document.getElementById('dodger');

document.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    moveLeft(dodger);
  }
  else if (key.which === 39) {
    moveRight(dodger);
  }
});