const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerLeft(){
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0 ){
    dodger.style.left = `${left - 1}px`
  }
}


function moveDodgerRight(){
  
  var lefNumbers = dodger.style.left.replace('px','')
  
  var left = parseInt(leftNumbers, 10)
  
  if ( right < 300 ) {
    dodger.style.left = `${left + 1}px`
  }
}


document.addEventListener('keydown',
function(e) {
  e.preventDefault();
  if ( e.which === 37 ){
    console.log("something happen")
    moveDodgerLeft()
  }
  
  
  if ( e.which === 39 ){
    console.log("something happen")
    moveDodgerRight()
  }
}
)