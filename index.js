const app = "I don't do much."

var dodger = docment.getElementById('dodger');

dodger.addEventListener('keydown', function(e){
  if(e.which === 39){
    moveDodgerRight();
  }else if(e.which === 37){
    moveDodgerLeft();
  }
})

function moveDodgerLeft(){
  var currentLeft = parseInt(dodger.style.left.replace('px', ''));
  dodger.left = `${currentLeft - 1}px`;
}

function moveDodgerRight(){
  var currentRight = parseInt(dodger.style.right.replace('px', ''));
  dodger.right = `${currentRight - 1}px`;
}
