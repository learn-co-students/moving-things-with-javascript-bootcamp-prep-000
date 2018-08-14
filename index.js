const app = "I don't do much.";

document.addEventListener('keydown', function(e){
  
  if(e.which === 37){
   moveDodger('left'); 
  }
  else if(e.which ===39){
    moveDodger('right');
  }
  
});

function moveDodger(direction){
  
  var dodger =  document.getElementById('dodger');
  var rightNumbers = dodger.style.right.replace('px', '');
  var right = parseInt(rightNumbers, 10);

  if(right < 360 && direction === 'left')
    {
      dodger.style.right = `${right +4}px`;   
    }
      
  else if(right > 0 && direction === 'right')
    {
      dodger.style.right = `${right -4}px`; console.log(right);
    }
}

  

