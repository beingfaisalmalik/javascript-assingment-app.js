function usermarks()
{
    document.getElementById("pPrint").innerHTML = " "; 
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
    Total_marks1 = 100;
    Total_marks2= 100;
    Total_marks3 = 100;
    var s1 = window.prompt("Enter Name Of Subject1: ");
    var s2 = window.prompt("Enter Name Of Subject2: ");
    var s3 = window.prompt("Enter Name Of Subject3: ");
  
    var m1 = window.prompt("Enter Marks Of Subject1: ");
    var m2 = window.prompt("Enter Marks Of Subject2: ");
    var m3 = window.prompt("Enter Marks Of Subject3: ");

    var percentage1 = (m1/Total_marks1)*100
    var percentage2 = (m2/Total_marks2)*100
    var percentage3 = (m3/Total_marks3)*100
    var number1 = percentage1.toFixed(2);
    var number2 = percentage2.toFixed(2);
    var number3 = percentage3.toFixed(2);
    var totper = (parseInt(number1)+parseInt(number2)+parseInt(number3))/3;
    var percen = totper.toFixed(2);

    document.getElementById("subject").innerHTML = "Subject";
    document.getElementById("TotalMarks").innerHTML = "Total Marks";
    document.getElementById("MarksObtained").innerHTML = "Marks Obtained";
    document.getElementById("Percentage").innerHTML = "Percentage";

    document.getElementById("s1").innerHTML = s1;
    document.getElementById("s2").innerHTML = s2;
    document.getElementById("s3").innerHTML = s3;
    document.getElementById("t1").innerHTML = Total_marks1;
    document.getElementById("t2").innerHTML = Total_marks2;
    document.getElementById("t3").innerHTML = Total_marks3;
    document.getElementById("m1").innerHTML = m1;
    document.getElementById("m2").innerHTML = m2;
    document.getElementById("m3").innerHTML = m3;
    document.getElementById("p1").innerHTML = number1;
    document.getElementById("p2").innerHTML = number2;
    document.getElementById("p3").innerHTML = number3;
    document.getElementById("tm").innerHTML = 300;
    document.getElementById("tm2").innerHTML = parseInt(m1)+parseInt(m2)+parseInt(m3) ;
    document.getElementById("tm3").innerHTML =  percen;
}