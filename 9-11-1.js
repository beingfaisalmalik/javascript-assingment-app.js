function CityFunction() {
    var greeting;
    var city = window.prompt("Enter City Name: ");
    if (city == "Karachi") {
      greeting = "Welcome to  the city of lights";
    } 
    if (city == "karachi") {
        greeting = "Welcome to  the city of lights";
      } 
     else if (city == "KARACHI") {
        greeting = "Welcome to  the city of lights";
      } 
     else if (city == "") {
        greeting = "Please Enter Some City Name";
      } 
     else {
      greeting = "Welcome To  One Of The City Of  Pakistan";
    }
    document.getElementById("demo").innerHTML = greeting;
  
document.getElementById("total").innerHTML = " ";
document.getElementById("obtaiin").innerHTML = " ";
document.getElementById("percentage").innerHTML = " ";
document.getElementById("grade").innerHTML =" ";
document.getElementById("Remarks").innerHTML = " ";
  }