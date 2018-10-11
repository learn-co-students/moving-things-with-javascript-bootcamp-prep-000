const app = "I don't do much."
var dodger = document.getElementById('dodger')
  /*dodger.style.backgroundColor = "#ff69b4";
  dodger.style.bottom = "0px"
  
  document.addEventListener('keydown', function(e) {
    console.log(e.which) 
  })


  document.addEventListener('keydown', function(e) {
      if (e.which === 37) {
        var leftNumbers = dodger.style.left.replace('px', '')
        var left = parseInt(leftNumbers, 10)
        
        dodger.style.left = `${left - 1}px`
      } 
  }) */
  
//This Works  
var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
 var leftNumbers = dodger.style.left.replace('px', " ")
 var left = parseInt(leftNumbers, 10)

	if (left > 0) {
	  dodger.style.left = `${left - 1}px`
	}   
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

// This doesn't work
 document.addEventListener('keydown', function(e) {
  console.log(e.which)
}) 


 function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', " ")
  var right = parseInt(rightNumbers, 10)
  
  if (right > 0) {
  dodger.style.left =`${right + 1}px`
  }
}

// CANNOT USE style.right for some reason!

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
}) 



/* function moveDodgerRight() {
 var leftNumbers = dodger.style.left.replace('px', " ")
 var left = parseInt(leftNumbers, 10)

	if (left > 0) {
	  dodger.style.left = `${left + 1}px`
	}   
}


document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
}) */


