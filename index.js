const app = "I don't do much."

function moveDodgerRight() {
  document.addEventListener('keydown', function(e) {
    if (e.which === 39) {
      var leftNumbers = dodger.style.left.replace('px', '')
      var left = parseInt(leftNumbers, 10)
   
      dodger.style.left = `${left + 4}px`
    }
  })
}