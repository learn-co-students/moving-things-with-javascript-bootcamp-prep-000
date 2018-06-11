const app = "I don't do much."

var dodger = document.getElementById('dodger');
  
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
    
  if(left > 0)
    dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  var maxWidth = $("#game").width() - $("#dodger").width();
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  var right = maxWidth - left;
  
  if(right > 0) 
    dodger.style.left = `${left + 1}px`;
}

$(document).ready(function(){
  
  dodger.style.backgroundColor = '#FF69B4';
  
  document.addEventListener('keydown', function(e) {
    console.log(e.which);
    if (e.which === 37)
      moveDodgerLeft();
    if (e.which === 39)
      moveDodgerRight();
  }); 
  
});