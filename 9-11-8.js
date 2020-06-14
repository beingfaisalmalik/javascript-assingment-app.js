function numbercheckFunction() {

   var x = window.prompt("Enter A Number:");
   if(x%3==0) 
    {     
        message = "Number Is Divisible By 3"
               
    } 
     
   else if (x %3!=0)
    { 
      
        message = "Number Is Not Divisible By 3"
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