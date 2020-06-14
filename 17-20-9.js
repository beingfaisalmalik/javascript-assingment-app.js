function Function9()
{
    var numbers = [ 431, 2323, 36, 44, 53, 62, 71, 28, 59, 310, 3311, 2112, 6413, 7714, 5415,3416,217,218,419,220,421,34,54,23,678,432,4545,754]
    var minimum;
    minimum = numbers[0]
    for (i=0; i<numbers.length; i++){
      if(numbers[i]<minimum){
      minimum = numbers[i];
      document.getElementById("demo8").innerHTML =minimum+" is  the smallest  number in array at Index"+" "+i; 
      document.getElementById("demo9").innerHTML =" Array Items"+" "+"["+numbers+"]";
    }

    }
    document.getElementById("demo7").innerHTML =" "; 
    document.getElementById("demo6").innerHTML =" ";
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
    document.getElementById("count").innerHTML = " ";
document.getElementById("count1").innerHTML = " ";
document.getElementById("reverse").innerHTML = "";
document.getElementById("reverse1").innerHTML = " ";

document.getElementById("demo10").innerHTML =""
document.getElementById("even").innerHTML = " ";
document.getElementById("even1").innerHTML= " ";
 
document.getElementById("odd").innerHTML = " ";
document.getElementById("odd1").innerHTML= " ";
document.getElementById("demo4").innerHTML ="";
document.getElementById("demo41").innerHTML ="";
document.getElementById("demo61").innerHTML =" "; 
document.getElementById("demo71").innerHTML =" ";
document.getElementById("demo51").innerHTML =" ";
}