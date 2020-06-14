function Function6(){
var couting = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var couting2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var couting3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20]


document.getElementById("count").innerHTML = "Counting";
document.getElementById("count1").innerHTML = couting;
document.getElementById("reverse").innerHTML = "Reverse";
document.getElementById("reverse1").innerHTML = couting2.reverse();

let filtered_even=couting3.filter((a,i)=>i%2===1);  
document.getElementById("even").innerHTML = "Even";
document.getElementById("even1").innerHTML= filtered_even;
let filtered_odd=couting3.filter((a,i)=>i%2===0);  
document.getElementById("odd").innerHTML = "Odd";
document.getElementById("odd1").innerHTML= filtered_odd;
document.getElementById("demo2").innerHTML = " "; 
var pTag= document.getElementById('demo1');
pTag.innerHTML += " ";
document.getElementById("demo41").innerHTML ="";
document.getElementById("demo61").innerHTML =" "; 
document.getElementById("demo71").innerHTML =" ";
document.getElementById("demo51").innerHTML =" ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " "; 
  document.getElementById("demo4").innerHTML = " "; 

  document.getElementById("demo6").innerHTML = " "; 
  document.getElementById("demo7").innerHTML = " "; 
  document.getElementById("demo2").innerHTML = " "; 

document.getElementById("o").innerHTML = " ";
document.getElementById("demo41").innerHTML ="";
document.getElementById("demo61").innerHTML =" "; 
document.getElementById("demo71").innerHTML =" ";
document.getElementById("demo51").innerHTML =" ";

document.getElementById("n").innerHTML = " ";
document.getElementById("demo4").innerHTML ="";
document.getElementById("e").innerHTML = " ";
document.getElementById("demo6").innerHTML =" "; 
document.getElementById("demo7").innerHTML =" ";
document.getElementById("demo8").innerHTML =" "; 
document.getElementById("demo9").innerHTML =" ";
document.getElementById("demo3").innerHTML = " "; 
document.getElementById("demo4").innerHTML = " "; 
document.getElementById("demo10").innerHTML =""
document.getElementById("demo6").innerHTML = " "; 
document.getElementById("demo7").innerHTML = " "; 
document.getElementById("demo2").innerHTML = " "; 
var pTag= document.getElementById('demo1');
pTag.innerHTML += " ";

    


}
