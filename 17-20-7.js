function Function7()


{document.getElementById("count").innerHTML = " ";
document.getElementById("count1").innerHTML = " ";
document.getElementById("reverse").innerHTML = " ";
document.getElementById("reverse1").innerHTML = " ";

 
document.getElementById("even").innerHTML = " ";
document.getElementById("even1").innerHTML= " ";
 
document.getElementById("odd").innerHTML = " ";
document.getElementById("odd1").innerHTML=" ";
document.getElementById("demo2").innerHTML = " "; 
    var arr= [ "cake",'apple-pie',"cookie","chips","pattiess","samosa","biscuits"]
    function beginhere() {
        var input = window.prompt("Welcome To ABC Bakery What You Want To Order?: ");
     
        for (i=0; i<arr.length; i++){
           if (arr[i] == input) {
            document.getElementById("demo4").innerHTML =(arr[i])+"is availible in our bakery at Index"+" "+i; 
              return;
           }
        }
        document.getElementById("demo4").innerHTML =("We Are Sorry"+" "+input+" " +"is  not availible at our bakery ");
     };

     beginhere();
    
     document.getElementById("demo6").innerHTML =" "; 
     document.getElementById("demo7").innerHTML =" ";
     document.getElementById("demo8").innerHTML =" "; 
     document.getElementById("demo9").innerHTML =" ";
     document.getElementById("o").innerHTML = " ";
    
    document.getElementById("n").innerHTML = " ";
    document.getElementById("demo41").innerHTML ="";
document.getElementById("demo61").innerHTML =" "; 
document.getElementById("demo71").innerHTML =" ";
document.getElementById("demo51").innerHTML =" ";
    document.getElementById("e").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " "; 
 
    
    document.getElementById("demo6").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    document.getElementById("demo2").innerHTML = " "; 
    var pTag= document.getElementById('demo1');
    pTag.innerHTML += " ";
    document.getElementById("count").innerHTML = " ";
document.getElementById("count1").innerHTML = " ";
document.getElementById("reverse").innerHTML = "";
document.getElementById("reverse1").innerHTML = " ";


document.getElementById("even").innerHTML = " ";
document.getElementById("even1").innerHTML= " ";
document.getElementById("demo2").innerHTML = "  "; 
document.getElementById("odd").innerHTML = " ";
document.getElementById("odd1").innerHTML= " ";
document.getElementById("count").innerHTML = " ";
document.getElementById("count1").innerHTML = " ";
document.getElementById("reverse").innerHTML = "";
document.getElementById("reverse1").innerHTML = " ";

document.getElementById("demo6").innerHTML =" "; 
document.getElementById("demo7").innerHTML =" ";
document.getElementById("demo8").innerHTML =" "; 
document.getElementById("demo9").innerHTML =" ";
document.getElementById("even").innerHTML = " ";
document.getElementById("even1").innerHTML= " ";
document.getElementById("demo10").innerHTML =""
document.getElementById("odd").innerHTML = " ";
document.getElementById("odd1").innerHTML= " ";
    
}
