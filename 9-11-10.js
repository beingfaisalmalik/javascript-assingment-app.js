function TempcheckFunction() {

    var T = window.prompt("Please Enter Temprature:");
    if(T>40) 
     {     
         message = "It is too hot outside" 
                
     } 
      
    else  if  (T>30)
     { 
       
         message = "The Weather Today is Normal"
     } 
     else  if (T>20)
     { 
       
         message = "Today's Weather Is Cool"
     }
    else  if (T>10)
     { 
        message = "OMG!  Today's Weather Is Cool"
     }
     else {
         message = "Please Enter Correct Data"
     }
  
  document.getElementById("demo").innerHTML = message;
  document.getElementById("total").innerHTML = " ";
  document.getElementById("obtaiin").innerHTML = " ";
  document.getElementById("percentage").innerHTML = " ";
  document.getElementById("grade").innerHTML =" ";
  document.getElementById("Remarks").innerHTML = " ";
  
  }