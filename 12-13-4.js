function Function4()
{
    var flag;
    ch = window.prompt("Input The  Character");
    

    if(ch.match(/[aeiouAEIOU]/))
    {
        document.getElementById("demo13").innerHTML =("The Input Character" +" " +ch + " " + "is a Vowel");
    }
    else {
        document.getElementById("demo13").innerHTML =("The Input Character" + " " +ch + " " + "is not a Vowel");
    }
    document.getElementById("demo11").innerHTML ="";  
    document.getElementById("demo15").innerHTML =""; 
    document.getElementById("demo12").innerHTML =""; 
    document.getElementById("demo14").innerHTML =""; 
    document.getElementById("demo16").innerHTML =""; 
    document.getElementById("demo15").innerHTML =""; 
    document.getElementById("demo17").innerHTML =" ";  

}