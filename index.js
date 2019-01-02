const app = "I don't do much."

function moveDodgerLeft() {
  var dodger = document.getElementById('dodger')
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 5}px`
  }
}

function moveDodgerRight() {
  var dodger = document.getElementById('dodger')
  var leftPos = dodger.style.left.replace('px', '')
  var leftPosNum = parseInt(leftPos, 10)
 
  if (leftPosNum < 360) {
    dodger.style.left = `${leftPosNum + 5}px`
  }
}