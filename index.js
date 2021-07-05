const app = "I don't do much."
var dodger = document.getElementById('dodger')

function moveDodgerRight(){
  var rightNumber = dodger.style.right.replace('px', '');
  var right = parseInt(rightNumber, 10);
  
  if (right>0){
    dodger.style.right = `${right -1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})