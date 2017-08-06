
function moveDodgerLeft() {
	var leftNumbers = dodger.style.left.replace('px', '')
	var left = parseInt(leftNumbers, 10)
	if (left > 0) {
		dodger.style.left = `${left - 5}px`
	}
}

function moveDodgerRight() {
	var leftNumbers = dodger.style.left.replace('px', '')
	var left = parseInt(leftNumbers, 10)
	if (left < 360) {
		dodger.style.left = `${left + 5}px`
	}
}

document.addEventListener('keydown', function(e) {
	if (e.which === 37) {
		moveDodgerLeft()
	}
})

document.addEventListener('keydown', function(e) {
	if (e.which === 39) {
		moveDodgerRight()
	}
})
