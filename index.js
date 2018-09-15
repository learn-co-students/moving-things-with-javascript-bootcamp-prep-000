const app = "I don't do much."

function moveDodgerLeft () {
  var dodgerNumber = dodger.style.left.replace('px','');
  console.log(`dodgerNumber is ${dodgerNumber}`);

  var number = parseInt(dodgerNumber, 10);

  if(number>0) dodger.style.left = `${number-1}px`;
}

function moveDodgerRight () {
  var dodgerNumber = dodger.style.left.replace('px','');
  console.log(`dodgerNumber is ${dodgerNumber}`);

  var number = parseInt(dodgerNumber, 10);

  if(number<360) dodger.style.left = `${number+1}px`;
}


$(document).on('keydown', function(keypress) {
  console.log(keypress.which);

  if(keypress.which == 37) moveDodgerLeft();
  if(keypress.which == 39) moveDodgerRight();

})
