function Function1()
{
    document.getElementById("demo17").innerHTML =" ";  
    var ch = window.prompt("Please Enter Value:");
    var regex=/^[0-9]+$/;
    if (ch >= 'A' && ch <= 'Z'){  
    document.getElementById("demo11").innerHTML =  ("\n" + ch +  
                    " is an UpperCase character");  
       }
       else if (ch >= 'a' && ch <= 'z'){  
        document.getElementById("demo11").innerHTML =("\n" + ch +  
                    " is an LowerCase character" );  
        }
        else if (ch.match(regex)){
        document.getElementById("demo11").innerHTML =("\n" + ch +  
                    " is not an alphabet");
        }

        document.getElementById("demo13").innerHTML ="";  
        document.getElementById("demo15").innerHTML =""; 
        document.getElementById("demo12").innerHTML =""; 
        document.getElementById("demo14").innerHTML =""; 
        document.getElementById("demo16").innerHTML =""; 
}