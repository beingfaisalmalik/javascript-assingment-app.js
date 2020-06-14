function Function10()
{
  function  countMultiples() 
    { 
      
        for (var i=1; i<100; i++) {
            if (i%5==0) 
            {
            document.getElementById("demo10").innerHTML ="CHECK ITS ANSWER IN CONSOLE"
             console.log(i);		
            }	
		}
    } 
  
    document.getElementById("o").innerHTML = " ";
    
    document.getElementById("n").innerHTML = " ";
    
    document.getElementById("e").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " "; 
    document.getElementById("demo4").innerHTML = " "; 

    document.getElementById("demo6").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    document.getElementById("demo2").innerHTML = " "; 
    var pTag= document.getElementById('demo1');
    pTag.innerHTML += " ";
    document.getElementById("demo6").innerHTML =" "; 
    document.getElementById("demo7").innerHTML =" ";
    document.getElementById("demo8").innerHTML =" "; 
    document.getElementById("demo9").innerHTML =" ";

    document.getElementById("count").innerHTML = " ";
document.getElementById("count1").innerHTML = " ";
document.getElementById("reverse").innerHTML = "";
document.getElementById("reverse1").innerHTML = " ";
document.getElementById("demo41").innerHTML ="";
document.getElementById("demo61").innerHTML =" "; 
document.getElementById("demo71").innerHTML =" ";
document.getElementById("demo51").innerHTML =" ";

document.getElementById("even").innerHTML = " ";
document.getElementById("even1").innerHTML= " ";
 
document.getElementById("odd").innerHTML = " ";
document.getElementById("odd1").innerHTML= " ";
document.getElementById("demo4").innerHTML ="";
  countMultiples();
  }
  



