// move square within boundaries of box

var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'
dodger.style.bottom = '0px'

function moveLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  
  if (left > 0) {
    dodger.style.left = `${left - 15}px`
  }
}

function moveRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  
  if (left < 360) {
    dodger.style.left = `${left + 15}px`
  }
}

function moveUp() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
  
  if (bottom < 360) {
    dodger.style.bottom = `${bottom + 15}px`
  }
}

function moveDown() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
  
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 15}px`
  }
}

document.addEventListener('keydown', function(e){
  if (e.which === 37) {
    moveLeft()
  } else if (e.which === 38) {
    moveUp()
  } else if (e.which === 39) {
    moveRight()
  } else if (e.which === 40) {
    moveDown()
  }
})


