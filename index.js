const app = "I don't do much."


var dodger= document.getElementById('dodger');


function moveDodgerLeft(){
  var leftNum = dodger.style.left.replace('px','');
  var left = parseInt(leftNum,10);
  
  if(left>0){
    dodger.style.left = `${left-1}px`;
  }
}


function moveDodgerRight(){
  var rightNum = dodger.style.right.replace('px','');
  var right = parseInt(rightNum,10);
}