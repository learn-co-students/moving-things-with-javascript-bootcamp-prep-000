const app = "I don't do much.";
const dodger = document.getElementById('dodger')

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
document.addEventListener('keydown', function(e) {
    if (e.which === 39) {
      moveDodgerRight()
    }
})