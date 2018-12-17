const app = "I don't do much.";


function moveDodgerRight(){
    var leftNumbers = dodger.style.left.replace('px','');
    var left = parseInt(leftNumbers,10);
    if (left < 362) {
    dodger.style.left = `${left + 10}px`;
  }
}

function moveDodgerLeft(){
    var leftNumbers = dodger.style.left.replace('px','');
    var left = parseInt(leftNumbers,10);
    if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}