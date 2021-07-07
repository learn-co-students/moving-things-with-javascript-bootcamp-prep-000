const app = "I don't do much."
document.addEventListener('keydown', function(e) {
  console.log(e.which)
})
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})
