const app = "I don't do much."

function moveDodgerRight()
{
  document.addEventListner('keydown', function(e)
  {
    if(e.which === 39)
    {
      var rightNumbers = dodget.style.right.replace('px', '');
      var right = parseInt(rightNumbers, 10);
      dodger.style.left = `${left -1 }px`;
    }
  });
}