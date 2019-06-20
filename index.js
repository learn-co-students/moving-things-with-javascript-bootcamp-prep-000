const app = "I don't do much."
var dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#000000";
// dodger.sytle = $('#dodger');

/*
//moving dodger 
document.addEventListener('keydown', (e)=>{
    if(e.which === 37){ // move left
      
      var leftNumbers = dodger.style.left.replace('px', '')
      var left = parseInt(leftNumbers, 10)
        left > 0 ? dodger.style.left = `${left - 1}px`: 0
    } else if(e.which === 39){  // move right
      
        leftNumbers = dodger.style.left.replace('px', '')
       left = parseInt(leftNumbers, 10)
        dodger.style.left = `${left + 1}px`
    } else if(e.which === 38){  //move up
      
        var buttomNumbers = dodger.style.bottom.replace('px', '')
        var bottom = parseInt(buttomNumbers, 10)
        dodger.style.bottom = `${bottom + 1}px`
    } else if(e.which === 40){  //move down
      
        buttomNumbers = dodger.style.bottom.replace('px', '')
        bottom = parseInt(buttomNumbers, 10)
        
        bottom > 0 ? dodger.style.bottom = `${buttomNumbers - 1}px`:0
    }
});
*/

function moveDodgerRight(){
//create right style
  var dodgerL = dodger.style.left.replace('px','');
  var dodgerN = parseInt(dodgerL, 10);
  
// move to right

// condition 
dodgerN < 360 ? dodger.style.left = `${dodgerN + 1}px`:0
}

