function FeulFunction() {
    var message;
    var h=0.25;
    var current_feul = window.prompt("Enter Your Current Feul: ");
    if (current_feul <= h) {
      message = "Please refill the feul in your car ";
    }

    else if (current_feul > h) {
        message = " the feul in your car is above:"+" "+h;
      }  

    else {
      message = "Please Enter Correct Info";
    }
    
    document.getElementById("demo").innerHTML = message;
  
    document.getElementById("total").innerHTML = " ";
    document.getElementById("obtaiin").innerHTML = " ";
    document.getElementById("percentage").innerHTML = " ";
    document.getElementById("grade").innerHTML =" ";
    document.getElementById("Remarks").innerHTML = " ";
  }