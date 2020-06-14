function Function5(){

  
document.getElementById("demo13").innerHTML =" ";  
document.getElementById("demo11").innerHTML =" "; 
document.getElementById("demo12").innerHTML =" "; 
document.getElementById("demo14").innerHTML =" "; 
document.getElementById("demo11").innerHTML =" "; 
document.getElementById("demo13").innerHTML =" "; 
document.getElementById("demo17").innerHTML =" ";  

    num = window.prompt("Please enter your password");
var passw=  "FAISAL";
if(num==passw) 
{ 
 document.getElementById("demo15").innerHTML =("Correct! The password you entered matches the original password")
return true;
}
else
{ 
 document.getElementById("demo15").innerHTML =('Incorrect password')
return false;
}
document.getElementById("demo16").innerHTML =greeting;

}