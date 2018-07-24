var dodger = document.getElementById('dodger');
var box = document.getElementById('game');

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  var dodgerWidthNumbers = $('#dodger').css('width').replace('px','')
  var dodgerWidth = parseInt(dodgerWidthNumbers, 10)
  var boxWidthNumbers = $('#game').css('width').replace('px','')
  var boxWidth = parseInt(boxWidthNumbers, 10)
  

  if (left < (boxWidth-dodgerWidth)) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})
