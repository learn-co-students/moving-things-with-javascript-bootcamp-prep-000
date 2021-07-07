const app = "I don't do much."

var dodger = document.getElementById('dodger');

function moveDodgerToLeft()
{
  var leftNumber = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumber, 10);
  
  if(left > 0)
  {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerToRight()
{
  var leftNumber = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumber, 10);
  
  if(left < 360)
  {
    dodger.style.left = `${left + 1}px`
  }
}


document.addEventListener('keydown', function(key)
  {
    if(key.which === 37)
    {
      moveDodgerToLeft();
    }
  }
);

document.addEventListener('keydown', function(key)
  {
    console.log(key.which);
    if(key.which === 39)
    {
      moveDodgerToRight();
    }
  }
);