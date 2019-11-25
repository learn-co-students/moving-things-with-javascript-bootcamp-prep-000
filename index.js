const app = "I don't do much."

// Control keycodes. 
const LEFT_KEY = 37;
const RIGHT_KEY = 39;

var moveSpeed = 2;
var dodger = document.querySelector("#dodger"); 

function init() {
  // Get document to listen for mouse clicks. 
  document.addEventListener("keydown", function(event) {
    move(event);
  });
}

function move(event) {
  
  let leftNo = dodger.style.left.replace("px", "");
  let left = parseInt(leftNo, 10);
  
  switch(event.which) {
    
    case LEFT_KEY:
      // Check there is space to the left, if so, move in that direction.
      if (left > 0) {
        dodger.style.left = `${left - moveSpeed}px`;
      }
      break;
      
    case RIGHT_KEY:
      // Check there is space to the right, if so, move in that direction.
      if (left < 340) {
        dodger.style.left = `${left + moveSpeed}px`;
      }
      break;
      
  }
}

init(); 
