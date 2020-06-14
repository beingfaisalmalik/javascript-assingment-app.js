function Function2()
{
num1 = window.prompt("Input the First Number", "0");
num2 = window.prompt("Input the second Number", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
    document.getElementById("demo12").innerHTML =("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
    document.getElementById("demo12").innerHTML =("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
    document.getElementById("demo12").innerHTML =("The values "+ num1+ " and "+num2+ " are equal.");
  }
  document.getElementById("demo13").innerHTML ="";  
  document.getElementById("demo15").innerHTML =""; 
  document.getElementById("demo11").innerHTML =""; 
  document.getElementById("demo14").innerHTML =""; 
  document.getElementById("demo16").innerHTML =""; 
  document.getElementById("demo17").innerHTML =" ";  
}