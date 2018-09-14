const app = "I don't do much."


function moveRockRight(){
  var dodger = document.getElementById('dodger')
  var leftNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(leftNumbers, 10);
  console.log(right)
  if(right < 360){
    dodger.style.left = `${right + 1}px`
  }
}

document.addEventListener('keydown', function(e){
  if(e.which === 39){
    moveRockRight();
  }
})
