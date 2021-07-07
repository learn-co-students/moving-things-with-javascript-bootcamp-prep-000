const app = "I don't do much."


var dodger = document.getElementById("dodger")

document.addEventListener("keydown", (e) => {
  // Left Control
  if (e.which === 37){
    var position = dodger.style.left.replace("px","")
    var left = parseInt(position, "")
    dodger.style.left = `${left - 10}px`
    if(position < 0){
      dodger.style.left = `${left}px`
    }
  }

  // Right Control
  if (e.which === 39){
    var position = dodger.style.left.replace("px","")
    var right = parseInt(position, "")
    dodger.style.left = `${right + 10}px`

    if(position > 360){
      dodger.style.left = `${right}px`
    }
  }
})
