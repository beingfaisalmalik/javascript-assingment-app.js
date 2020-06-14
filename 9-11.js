function myFunction() {
    var greeting;
    var city = window.prompt("Enter City Name: ");
    if (city == "Karachi") {
      greeting = "Welcome to  the city of lights";
    }  else {
      greeting = "Welcome To  One Of The City Of  Pakistan";
    }
    document.getElementById("demo").innerHTML = greeting;
  }