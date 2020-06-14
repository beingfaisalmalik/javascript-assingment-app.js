function printTable(){
    document.getElementById("pPrint").innerHTML = " "; 
    var num;
     num = window.prompt("Enter A Number: ");
     if(num=="")
     {
         num = 5;
     }
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('pPrint');
        pTag.innerHTML += (num + " * " +  
        i + " = " +  
        num * i + "\n") + "<br/>" 
    }
  
    document.getElementById("one").innerHTML = " ";
document.getElementById("two").innerHTML = " ";

document.getElementById("three").innerHTML = " ";

document.getElementById("four").innerHTML = " ";


document.getElementById("five").innerHTML = " ";

document.getElementById("six").innerHTML = " ";

document.getElementById("seven").innerHTML = " ";

document.getElementById("eight").innerHTML = " ";


document.getElementById("nine").innerHTML = " ";

document.getElementById("ten").innerHTML = " ";
document.getElementById("user").innerHTML = " "; 
document.getElementById("subject").innerHTML = " ";
    document.getElementById("TotalMarks").innerHTML = " ";
    document.getElementById("MarksObtained").innerHTML = " ";
    document.getElementById("Percentage").innerHTML = " ";
    document.getElementById("tm").innerHTML = " ";
    document.getElementById("tm2").innerHTML = " " ;
    document.getElementById("tm3").innerHTML =  " ";

    document.getElementById("s1").innerHTML = " ";
    document.getElementById("s2").innerHTML = " ";
    document.getElementById("s3").innerHTML = " ";
    document.getElementById("t1").innerHTML = " ";
    document.getElementById("t2").innerHTML = " ";
    document.getElementById("t3").innerHTML = " ";
    document.getElementById("m1").innerHTML = " ";
    document.getElementById("m2").innerHTML = " ";
    document.getElementById("m3").innerHTML = " ";
    document.getElementById("p1").innerHTML = " ";
    document.getElementById("p2").innerHTML = " ";
    document.getElementById("p3").innerHTML = " ";

}

