const app = "I don't do much."
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }
  if(e.which===38){var rightNumbers = dodger.style.right.replace('px','')
    var right = parseInt(rightNumbers, 10);}
});