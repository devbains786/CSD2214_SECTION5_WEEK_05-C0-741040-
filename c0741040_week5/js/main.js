function myFunction(a,b) {
   
    return (a + b);// The function returns 

}
function arrays() {

    var pens;
    pens = ["red", "orange", "green", "yellow", "blue"];

    markers = pens;
    console.log(markers);

    var j;
    for (j = 0; j < markers.length; j++) {
        alert(markers[j]);

    }
    alert("length of array is :"+ markers.length);
}