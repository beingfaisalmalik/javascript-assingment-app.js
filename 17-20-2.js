function Function2()
{
    var twoD = [[], []];
    var twoD = toString([[0, 1, 2,3,4], [1,0,1,2],[2,1,0,1]]);
    var three = toString(twoD[2][0]) +toString(twoD[2][1])+toString(twoD[2][2]+twoD[2][3]);

    document.getElementById("o").innerHTML = toString(twoD[0][0]) +toString(twoD[0][1])+toString(twoD[0][2]+twoD[0][3]);
    
    document.getElementById("n").innerHTML = toString(twoD[1][0]) +toString(twoD[1][1])+toString(twoD[1][2]+twoD[1][3]);
    
    document.getElementById("e").innerHTML = three;
    document.getElementById("demo").innerHTML =" ";
   
    document.getElementById("demo3").innerHTML = " "; 
    document.getElementById("demo4").innerHTML = " "; 
    document.getElementById("demo10").innerHTML =""
    document.getElementById("demo6").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    var pTag= document.getElementById('demo1');
    pTag.innerHTML += " ";
    document.getElementById("demo6").innerHTML =" "; 
    document.getElementById("demo7").innerHTML =" ";
    document.getElementById("demo8").innerHTML =" "; 
    document.getElementById("demo9").innerHTML =" ";
    document.getElementById("demo2").innerHTML = " "; 
    document.getElementById("count").innerHTML = " ";
    document.getElementById("count1").innerHTML = " ";
    document.getElementById("reverse").innerHTML = "";
    document.getElementById("reverse1").innerHTML = " ";
    document.getElementById("demo4").innerHTML ="";
    
    document.getElementById("demo41").innerHTML ="";
    document.getElementById("demo61").innerHTML =" "; 
    document.getElementById("demo71").innerHTML =" ";
    document.getElementById("demo51").innerHTML =" ";
    document.getElementById("even").innerHTML = " ";
    document.getElementById("even1").innerHTML= " ";
   
    document.getElementById("odd").innerHTML = " ";
    document.getElementById("odd1").innerHTML= " ";
}