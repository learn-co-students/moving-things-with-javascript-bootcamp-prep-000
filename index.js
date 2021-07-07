const app = "I don't do much."

let dodger = document.querySelector('#dodger');

document.addEventListener('keydown', function(event){
  if(event.which === 37){
    moveDodgerLeft();
  } else if (event.which === 39 && dodger.style.left !== '360px'){
    moveDodgerRight();
  }
});

function moveDodgerLeft(){
  let leftString = dodger.style.left.replace('px','');
  let leftNum = parseInt(leftString);
  if (leftNum > 0){
    dodger.style.left = `${leftNum-1}px`;
  }
}

function moveDodgerRight(){
  let leftString = dodger.style.left.replace('px','');
  let leftNum = parseInt(leftString);
  if(leftNum<360){
    dodger.style.left = `${leftNum+1}px`;
  }
}