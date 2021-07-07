const app = "I don't do much."

function keyHandler(e) {
  if (e.key === "ArrowLeft") {
      var leftNumbers = dodger.style.left.replace('px','')
      var left = parseInt(leftNumbers, 10)
      if (left > 0) {dodger.style.left = `${left - 1}px`}

  } else if (e.key === "ArrowRight") {
    var leftNumbers = dodger.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    if (left < 360) {dodger.style.left = `${left + 1}px`}

  } else if (e.key === "ArrowUp") {
    var bottomNumbers = dodger.style.bottom.replace('px','')
    var bottom = parseInt(bottomNumbers, 10)
    if (bottom < 380) {dodger.style.bottom = `${bottom + 1}px`}
  } else if (e.key === "ArrowDown") {
    var bottomNumbers = dodger.style.bottom.replace('px','')
    var bottom = parseInt(bottomNumbers, 10)
    if (bottom > 0) {dodger.style.bottom = `${bottom - 1}px`}
  }
}

document.addEventListener('keydown', keyHandler)
