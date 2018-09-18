const app = "I don't do much."
function moveDodgerRight(){
  var rightNumbers = dodger.style.right.replace('px','')
  var right = parseInt(rightNumbers, 10)
  if (right > 0){
    dodger.style.right = `${left + 1}px`
  }
  
}

document.addEventListner('keydown', function(e){
  if (e.which === 39){
    moveDodgerRight()
  }
});