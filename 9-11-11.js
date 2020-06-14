function CalcFunction() {

    var num1 = window.prompt("Please Enter Nmber1:");
    var num2 = window.prompt("Please Enter Nmber2:");
    var operator = window.prompt("Please Enter The Operator:");
    var message ;

    if(operator=='+')
    {
       var result= parseInt(num1)+parseInt(num2);
       message = result;
       
    }
   
    else if(operator=='-')
    {
      var result= parseInt(num1)-parseInt(num2);
       message = result;
    }
    else if(operator=='/')
    {
      var result= parseInt(num1)/parseInt(num2);
       message = result;
    }
    else if(operator=='*')
    {
      var result= parseInt(num1)*parseInt(num2);
       message = result;
    }
    else
    {
        message = "Please Enter Correct Data"
    }
    document.getElementById("demo").innerHTML = message;
  document.getElementById("total").innerHTML = " ";
  document.getElementById("obtaiin").innerHTML = " ";
  document.getElementById("percentage").innerHTML = " ";
  document.getElementById("grade").innerHTML =" ";
  document.getElementById("Remarks").innerHTML = " ";
}   