function Function1()
{
 var student  = ['ali','faisal','amman']
 var marks = [120,130,200]
 var total_marks=500;
 var obtained_marks1 = marks[0]
 var obtained_marks2 = marks[1]
 var obtained_marks3 = marks[2]


var percentage1 = (obtained_marks1/total_marks)*100
var percentage2 = (obtained_marks2/total_marks)*100
var percentage3 = (obtained_marks3/total_marks)*100

 document.getElementById("demo1").innerHTML = " SCORE OF:"+student[0]+' '+percentage1+"%";
 document.getElementById("demo2").innerHTML = " SCORE OF:"+student[1]+' '+percentage2+"%";
 document.getElementById("demo3").innerHTML = " SCORE OF:"+student[2]+' '+percentage3+"%";





}