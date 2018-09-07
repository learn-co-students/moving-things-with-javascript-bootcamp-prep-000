function moveDodgerLeft() {
	var left = parseInt(dodger.style.left, 10)
	if (left > 0) {dodger.style.left = `${left-1}px`
    }
}

document.addEventListener('keydown', function(e) {
	if (e.which === 37) {
	moveDodgerLeft()
    }
})

function moveDodgerRight() {
	var right = parseInt(dodger.style.left, 10)
	if (right > 0) {dodger.style.left = `${right+1}px`
    }
}

document.addEventListener('keydown', function(e) {
	if (e.which === 39) {
	moveDodgerRight()
    }
})

/* 
Notes

  "So what are we doing here?"

if (e.which === 37) {
  	"if we catch a left arrow keydown"
  
 dodger.style.left = `${left - 1}px`
  	 "we move the dodger 1 pixel to the left."
  
  
  var leftNumbers = dodger.style.left.replace('px', '')
  		[this takes the "px" off the x-axis location and gives us just a number. although it's not really necessary because parseInt does that for you.]
  
  var left = parseInt(leftNumbers, 10)
  		"(We have to parse the pixels as integers and then convert them back to the pixel string.)"
  
 [no else statement]
      "Otherwise (if it's not a left arrow keydown), we do zilch."


*/