$(function(){
  var dodger = document.getElementById('dodger');
  
  document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft'){
      moveDodgerLeft();
    }
    if (e.key === 'ArrowRight'){
      moveDodgerRight();
    }
  })
  
  function moveDodgerLeft(){
    var currentPosition = parseInt(dodger.style.left);
    if (currentPosition > 0){
      dodger.style.left = `${currentPosition - 10}px`;
    }
  }
  
  function moveDodgerRight(){
    var currentPosition = parseInt(dodger.style.left);
    if (currentPosition < 360){
      dodger.style.left = `${currentPosition + 10}px`;
    }
  }
})