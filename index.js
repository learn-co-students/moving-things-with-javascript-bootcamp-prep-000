var dodger=document.getElementByID('dodger')
dodger.style.backgroundColor= '#FF89302'
var leftNumbers= dodger.style.left.replace('px','')
var left=parseInt(leftNumbers,10)

function moveDodgerLeft(){
    if(left>0){
      dodger.style.left=`${left-1}px`
    }
}

function moveDodgerRight(){
  if(left<360){
    dodger.style.left=`${left+1}px`
  }
}

document.addEventListener('keydown',function(e){ if (e.which==37){
    moveDodgerLeft()
  } 
  if (e.which==39){
    moveDodgerRight()
  }
})