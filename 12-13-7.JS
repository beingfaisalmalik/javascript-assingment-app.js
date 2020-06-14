function Function7()
{
document.getElementById("demo13").innerHTML =" ";  
document.getElementById("demo11").innerHTML =" "; 
document.getElementById("demo12").innerHTML =" "; 
document.getElementById("demo14").innerHTML =" "; 
document.getElementById("demo11").innerHTML =" "; 
document.getElementById("demo13").innerHTML =" "; 
document.getElementById("demo15").innerHTML =" "; 
document.getElementById("demo16").innerHTML =" "; 
    var time  = window.prompt("Enter The Time");
    var greet;

    if(time>=0000 && time<1200)
    {
       greet = "Good Morning"
       document.getElementById("demo17").innerHTML =greet;
    }
    else if(time>=1200 && time<1700)
    {
       greet = "Good Afternoon"
       document.getElementById("demo17").innerHTML =greet;
    }
    else if(time>=1700 && time<2100)
    {
       greet = "Good Evening"
       document.getElementById("demo17").innerHTML =greet;
    }
    else if(time>=2100 && time<2359)
    {
       greet = "Good Night"
       document.getElementById("demo17").innerHTML =greet;
    }
}