const app = "I don't do much."

function moveDodgerLeft(){
  var leftNumbers=dodger.style.left.replace('px','');
  var left = parseInt(leftNumbers,10);
  if(left>0){dodger.style.left = `${left-1}px`}
}

function moveDodgerRight(){
  var rightNumbers = dodger.style.left.replace('px','');
  var right = parseInt(rightNumbers,10);
  if(right<360){
    dodger.style.left = `${right+1}px`}
}

document.addEventListener('keydown',function(e){
  if(e.which===37){
    moveDodgerLeft();}
    if(e.which===39){
      moveDodgerRight();}
})


