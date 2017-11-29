var pOne = 0;
var pTwo = 0;

var lplTarget = 0;
var p = document.querySelector("p");
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var restGame = document.getElementById("restGame");
restGame.onclick=function()
{
    pOne = 0;
    pTwo = 0;
    playerOne.style.backgroundColor="White";
    playerTwo.style.backgroundColor="White";
    p.innerHTML="Player One: "+pOne+"<br/>Player Two: "+pTwo;
    p.innerHTML="Player One: "+pOne+"<br/>Player Two: "+pTwo;
}
function functionNum()
 {
     var num = document.getElementById("num").value;
     lplTarget = num;
 }
 
playerOne.onclick=function()
    {
     if(pOne<lplTarget && pTwo != lplTarget)
        {
            pOne++;
            p.innerHTML="Player One: "+pOne+"<br/>Player Two: "+pTwo;
        }
         
   color()
   
    }
playerTwo.onclick=function()
    {
    if(pTwo<lplTarget && pOne != lplTarget)
        {
            pTwo += 1;
            p.innerHTML="Player One: "+pOne+"<br/>Player Two: "+pTwo;
        }
    color()
    }


function color()
    {
       
       if (pOne == lplTarget && pOne !=0)
            {
                playerOne.style.backgroundColor="green";
                playerTwo.style.backgroundColor="red";
            }
         if(pTwo == lplTarget && pTwo !=0)
            {
                playerTwo.style.backgroundColor="green";
                playerOne.style.backgroundColor="red";
            } 
         
    }

