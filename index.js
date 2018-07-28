document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveRight()
  }
})

function moveRight() {
  var left = parseInt(dodger.style.left.replace('px', ''))
  if (left > 0) {
    dodger.style.right = `${left + 1}px`
  }
}