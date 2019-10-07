const app = "I don't do much."
var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = '0px';

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left -20}px`
  }
}


function moveDodgerRight(){
    var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left < 400-40) {
    dodger.style.left = `${left + 20}px`
  }
}

function moveDodgerUp(){
      var leftNumbers = dodger.style.bottom.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left < 380) {
    dodger.style.bottom = `${left + 20}px`
  }
}

function moveDodgerDown(){
        var leftNumbers = dodger.style.bottom.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.bottom = `${left - 20}px`
  }

}


document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight()
  }
    if (e.which === 38) {
    moveDodgerUp()
  }
    if (e.which === 40) {
    moveDodgerDown()
  }
  
})



