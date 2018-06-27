const app = "I don't do much."

var dodger = document.getElementById('dodger')
// dodger.style.backgroundColor = "#FF69B4"
// dodger.style.bottom = '0px'
// dodger.style.left = '180px'

document.addEventListener('keydown', function(key) {
  if (key.which === 39) {
    moveDodgerRight()
  }
  if (key.which === 37) {
    moveDodgerLeft()
  }
})


function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers,10)

  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
//   var rightNumbers = dodger.style.left.replace('px', '')
//   var right = parseInt(rightNumbers,10)
//
//   if (right < 360) {
//     dodger.style.left = `${left + 1}px`
//   }
// }

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
