function SignalFunction() {
    var greeting;
    var color = window.prompt("Enter Road Traffic Signal: ");
    if (color == "Red") {
      greeting = "Must Stop";
    }   
    else if (color == "Yellow") {
      greeting = "Ready To Move";
    }
    else if (color == "Green") {
        greeting = "Move Now";
      }
    else {
        greeting = "Please Enter Correct Data";
      } 
    document.getElementById("demo").innerHTML = greeting;
    
    document.getElementById("total").innerHTML = " ";
    document.getElementById("obtaiin").innerHTML = " ";
    document.getElementById("percentage").innerHTML = " ";
    document.getElementById("grade").innerHTML =" ";
    document.getElementById("Remarks").innerHTML = " ";
  }