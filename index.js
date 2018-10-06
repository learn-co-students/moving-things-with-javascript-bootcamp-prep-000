const app = "I don't do much."


function moveDodgerRight(e) {
  if (e.which == 37) {
    var rightNumbers = dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)
    
    if(right > 0) {
    dodger.style.right = `${right - 1}px`
    }
  }
}