function Function3()
{
    num = window.prompt("Input The  Number", "0");

                                                 
if(parseInt(num) > 0) 
  { 
    document.getElementById("demo14").innerHTML =("The Number Is Positvie:");
  }   
else
  if(parseInt(num) < 0) 
  {
    document.getElementById("demo14").innerHTML =("The Number Is Negative:");
  }                  
else if(parseInt(num)==0)
  {
    document.getElementById("demo14").innerHTML =("The Number Is Zero:");
  }
  document.getElementById("demo13").innerHTML ="";  
  document.getElementById("demo15").innerHTML =""; 
  document.getElementById("demo12").innerHTML =""; 
  document.getElementById("demo11").innerHTML =""; 
  document.getElementById("demo16").innerHTML ="";
  document.getElementById("demo17").innerHTML =" ";   
}