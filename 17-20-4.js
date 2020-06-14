function Function4(){
    document.getElementById("o").innerHTML = " ";
    
    document.getElementById("n").innerHTML = " ";
    
    document.getElementById("e").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " "; 
    document.getElementById("demo").innerHTML =" ";
    var num;
    var range ;
     num = window.prompt("Enter A Number: ");
      range = window.prompt("Enter The Range : ");
    
    for(var i=1; i<=range; i++){
        var pTag= document.getElementById('demo1');
        pTag.innerHTML += (num + " * " +  
        i + " = " +  
        num * i + "\n") + "<br/>" 
    }
    document.getElementById("demo2").innerHTML = " "; 
    document.getElementById("demo41").innerHTML ="";
document.getElementById("demo61").innerHTML =" "; 
document.getElementById("demo71").innerHTML =" ";
document.getElementById("demo51").innerHTML =" ";
    document.getElementById("demo6").innerHTML =" "; 
    document.getElementById("demo7").innerHTML =" ";
    document.getElementById("demo8").innerHTML =" "; 
    document.getElementById("demo9").innerHTML =" ";
    document.getElementById("demo3").innerHTML = " "; 
    document.getElementById("demo4").innerHTML = " "; 
    document.getElementById("demo4").innerHTML ="";
    document.getElementById("demo10").innerHTML =""
    document.getElementById("demo6").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    document.getElementById("demo2").innerHTML = " "; 
    document.getElementById("count").innerHTML = " ";
    document.getElementById("count1").innerHTML = " ";
    document.getElementById("reverse").innerHTML = "";
    document.getElementById("reverse1").innerHTML = " ";
    
   
    document.getElementById("even").innerHTML = " ";
    document.getElementById("even1").innerHTML= " ";
   
    document.getElementById("odd").innerHTML = " ";
    document.getElementById("odd1").innerHTML= " ";
}
  