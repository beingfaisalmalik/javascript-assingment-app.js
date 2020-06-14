function MarksFunction()
{
    var marksheet = "MARKSHEET"
    var obtained_marks = window.prompt("Enter Your Marks: ");
    var total_marks=300;
    var percentage = (obtained_marks/total_marks)*100
    var number = percentage.toFixed(2);
    var Grade;
    var remarks;

    

if (number>100){
 Grade = "Invalid"
remarks = "Your Percentage is Above 100" 


}
else if   (number >=80)
{
Grade = "A-One"
remarks = "Excellent"
}
else
if (number>=70)
{
    Grade = "A"
    remarks = "Good"
}
else
if (number
     >=60 )
{
    Grade = "B"
    remarks = "You May Need To Improve"
}
else{
Grade = "Fail"
remarks = "Sorry"
}
document.getElementById("demo").innerHTML = marksheet;
document.getElementById("total").innerHTML = total_marks;
document.getElementById("obtaiin").innerHTML = obtained_marks;
document.getElementById("percentage").innerHTML = number+"%";
document.getElementById("grade").innerHTML = Grade;
document.getElementById("Remarks").innerHTML = remarks;
}