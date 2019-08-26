const app = "I don't do much."

const dodger = document.getElementById('dodger');
window.console.log(dodger.style.right);

function moveDogerLeft() {
  let leftNumber = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumber, 10);

  if(left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight(){
  let leftNumber = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumber, 10);

  if(left < parseInt(dodger.parentElement.offsetrWidth - dodger.offsetWidth)) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDogerUp() {
  let topNumber = dodger.style.bottom.replace('px', '');
  let top = parseInt(topNumber, 10);

  if(top < parseInt(dodger.parentElement.offsetHeight - dodger.offsetHeight)) {
    dodger.style.bottom = `${top + 1}px`
  }
}

function moveDogerDown() {
  let downNumber = dodger.style.bottom.replace('px', '');
  let down = parseInt(downNumber, 10);

  if(down > 0) {
    dodger.style.bottom = `${down - 1}px`
  }
}

document.addEventListener('keydown', function(e){
  console.log(e.which);
  if(e.which === 37){
    moveDogerLeft()
  } else if(e.which === 39) {
    moveDodgerRight();
} else if(e.which === 38){
  moveDogerUp();
} else if(e.which === 40) {
  moveDogerDown();
} else {
  return;
}

});
