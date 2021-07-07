const app = "I don't do much."
document.addEventListener('keydown', function(e) {
  console.log(e.which)
})
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
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
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})