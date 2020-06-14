function oddevencheckFunction() {

    var x = window.prompt("Enter A Number:");
    if(x%2==0) 
     {     
         message = "Number Is Even"
                
     } 
      
    else if (x %2==1)
     { 
       
         message = "Number Is Odd"
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