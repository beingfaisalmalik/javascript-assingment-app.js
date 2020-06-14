function GenderFunction() {
    var greeting;
    var gender = window.prompt("Enter Your Gender: ");
    if (gender == "Male") {
      greeting = "Good Morning Sir";
    }
    else if (gender == "MALE") {
        greeting = "Good Morning Sir";
      } 
      else if (gender == "male") {
        greeting = "Good Morning Sir";
      }  
      else if (gender == "female") {
        greeting = "Godd Morning Madam";
      }  
    else if (gender == "Female") {
      greeting = "Godd Morning Madam";
    }
    else if (gender == "FEMALE") {
        greeting = "Godd Morning Madam";
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