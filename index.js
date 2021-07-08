//onst app = "I don't do much."

var dodger = document.getElementById('dodger')

// we have to recall that the black box is using the coordinates of (dodger.style.left,dodger.style.bottom)
function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', ''); // replace(searchvalue, newvalue) 
  // we don't use dodger.style.right because style.left is on the HTML document
  var right = parseInt(rightNumbers, 10); //parseInt(string, radix)
  
  // since i inspected the box and dodger, the box being 400*400 and the dodger being 40*20, i simply subtracted the length of the dodger with the box to get 360
  // this prevents the box from going all the way to the right
  if (right < 360) {  
  
    dodger.style.left = `${right + 1}px`; 
  }
}
document.addEventListener('keydown', function(e){
  if (e.which === 39){ // this is the ascii key for the right 
    moveDodgerRight();
  }
})