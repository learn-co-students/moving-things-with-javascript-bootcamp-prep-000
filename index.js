const app = "I don't do much."

var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = '#FF69B4'

document.addEventListener('keydown', function(e) {
  console.log(e.which)
})

document.addEventListener('keydown', function(e) {
  if(e.which === 37) {
      var leftText = dodger.style.left.replace('px', '')
      var left = parseInt(leftText)
      if(left > 0) {
          dodger.style.left = `${left - 1}px`
      }
  }
})
