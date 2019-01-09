var game = document.getElementById('game')
game.style.width = '500px'
game.style.height = '500px'
var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'

document.addEventListener('keydown', function(e) {
  if (e.which === 37) moveDodgerHorizonal('left')
  if (e.which === 39) moveDodgerHorizonal('right')
})

function moveDodgerHorizonal(direction) {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
  if (left > 5 && direction == 'left') {
    for (let i = 0; i > 5; i++) {
      dodger.style.left = `${i}px`
    }
  }
  if (left < 455 && direction == 'right') dodger.style.left = `${left + 25}px`
  console.log(left)
  dodger.style.backgroundColor = direction == 'left' ? '#FF69B4' : '#FFF8B4';
}
