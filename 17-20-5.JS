function Function5()
{
  document.getElementById("o").innerHTML = " ";
    
  document.getElementById("n").innerHTML = " ";
  
  document.getElementById("e").innerHTML = " ";
    var cars = ["apple", "banana", "mango", "orange", "stawberry"];
    var i, len, text;
    for (i = 0, len = cars.length, text = ""; i < len; i++) {
      text += cars[i] + "<br>";
   
     
    }
    document.getElementById("demo10").innerHTML =""
    document.getElementById("demo3").innerHTML = "ELEMENT AT  INDEX 0:"+cars[0]; 
    document.getElementById("demo41").innerHTML = "ELEMENT AT  INDEX 1:"+cars[1]; 
    document.getElementById("demo51").innerHTML = "ELEMENT AT  INDEX 2:"+cars[2]; 
    document.getElementById("demo61").innerHTML = "ELEMENT AT  INDEX 3:"+cars[3]; 
    document.getElementById("demo71").innerHTML = "ELEMENT AT  INDEX 4:"+cars[4]; 
    document.getElementById("demo2").innerHTML = text; 
    var pTag= document.getElementById('demo1');
    pTag.innerHTML += " ";
    document.getElementById("count").innerHTML = " ";
    document.getElementById("count1").innerHTML = " ";
    document.getElementById("reverse").innerHTML = "";
    document.getElementById("reverse1").innerHTML = " ";
    document.getElementById("demo4").innerHTML ="";
    document.getElementById("demo6").innerHTML =" "; 
    document.getElementById("demo7").innerHTML =" ";
    document.getElementById("demo8").innerHTML =" "; 
    document.getElementById("demo9").innerHTML =" ";
    document.getElementById("even").innerHTML = " ";
    document.getElementById("even1").innerHTML= " ";

    document.getElementById("odd").innerHTML = " ";
    document.getElementById("odd1").innerHTML= " ";

}