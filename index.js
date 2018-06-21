const app = "I don't do much."

var dodgers = document.getElementById('dodgers');

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '');
  var right = parseInt(rightNumbers, 10);
        
  if (right>0) {
    dodger.style.right = `${right-0}px`;
  }
}
      
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight();
  }
});
      