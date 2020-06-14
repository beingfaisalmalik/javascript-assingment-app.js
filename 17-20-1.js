function Function1()
{
    document.getElementById("o").innerHTML = " ";
    
    document.getElementById("n").innerHTML = " ";
    
    document.getElementById("e").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " "; 
    document.getElementById("demo4").innerHTML = " "; 
    document.getElementById("demo10").innerHTML =""
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
    //empty 2D Array//
    var arr = [[],[]];
    //pushing Data To The 2D Array//
    arr[0][2] = 'DATA AT INDEX 0 OF THE 1 ROW';
arr[1][3] = 'DATA AT THE INDEX 0 OF TH 1 COLUMN';
//printing the elements of 2d arraay//
alert(arr[0][2]);
alert(arr[1][3]);
}