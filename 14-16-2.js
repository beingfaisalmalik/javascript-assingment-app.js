function Function2()
{
    document.getElementById("demo4").innerHTML = "ARRAY BEFORE ADDING:"+" "+arr;
    var ch = window.prompt("Please Enter The Color To Add At The Beganing Of An Array:");
    var arr = [ 'RED', 'VIOLET', 'DARK BKUE', 'GREEN','YELLOW' ];
    arr.splice(0, 0, ch);
document.getElementById("demo4").innerHTML = arr;
var ch2 = window.prompt("Please Enter The Color To Add At The End Of An Array:");
    var arr = [ 'RED', 'VIOLET', 'DARK BKUE', 'GREEN','YELLOW' ];
    arr.push(ch2);
document.getElementById("demo5").innerHTML = arr;
var ch = window.prompt("Please Enter The First Color To Add At The Beganing Of An Array:");
    var arr = [ 'RED', 'VIOLET', 'DARK BKUE', 'GREEN','YELLOW' ];
    arr.splice(0, 0, ch);
    var ch = window.prompt("Please Enter The First Color To Add At The Beganing Of An Array:");
    arr.splice(1, 0, ch);
    document.getElementById("demo6").innerHTML = arr;


}