const app = "I don't do much."
var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#000000"
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left // "180px"
dodger.style.bottom // "0px"
dodger.style.bottom = '100px'
dodger.style.bottom = '0px'

// document.addEventListener('keydown', function(e) {
//   console.log(e.which)
// })

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
      var leftNumbers = dodger.style.left.replace('px', '')
      var left = parseInt(leftNumbers, 10)
 
      dodger.style.left = `${left - 1}px`
    } else if (e.which === 39) {
      var rightNumbers = dodger.style.right.replace('px', '')
      var right = parseInt(rightNumbers, 10)
      dodger.style.rightNumbers = `${right + 1}px` //?
    }
  })

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var RightNumbers = dodger.style.moveDodgerRight.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  // } else {
  //   dodger.style.right = `${right + 1}px` // not sure?
  }
}
