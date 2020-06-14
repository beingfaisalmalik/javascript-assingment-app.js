function Function14()
{
    var myArray = new Array("iphone", "nokia", "oppo", "samsung", "nokia" );
    for(i=0; i<myArray.length; i++) {  
        document.write('<option value="' + myArray[i] +'">' + myArray[i] + '</option>');
    }
}