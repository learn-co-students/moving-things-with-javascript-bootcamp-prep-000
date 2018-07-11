var dodge = document.getElementById('dodger');
function moveDodgerLeft(){
  var leftNumbers = dodge.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  dodger.style.left = `${left - 1}px`
}
      
function moveDodgerRight(){
  var rightNumbers = dodge.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  dodger.style.left = `${right + 1}px`
}

document.addEventListener('keydown', function(e) {
  if(e.which === 37) {
    moveDodgerLeft();
  }
  if(e.which === 39){
    moveDodgerRight();
  }
});