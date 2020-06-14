function GuessFunction() {

   var y = Math.floor(Math.random() * 10 + 1);;
  var x = window.prompt("Enter Number From 1 TO 10:");
  if(x == y) 
   {     
       message = "Bingo! Correct answer"
              
   } 
    
  else if (x == y-1)
   { 
     
        message = "Close enough to the correct answer"
   } 
   else {
       message = "Please Enter Correct Number"
   }

   document.getElementById("demo").innerHTML = message;
   document.getElementById("total").innerHTML = " ";
document.getElementById("obtaiin").innerHTML = " ";
document.getElementById("percentage").innerHTML = " ";
document.getElementById("grade").innerHTML =" ";
document.getElementById("Remarks").innerHTML = " ";

}