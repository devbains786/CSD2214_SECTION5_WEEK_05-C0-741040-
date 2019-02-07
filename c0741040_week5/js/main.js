function myFunction(a,b) {
   
    return (a + b);// The function returns 

}
function arrays() {

    var pens;
    pens = ["red", "orange", "green", "yellow", "blue"];

    markers = pens;
    console.log(markers);

    var i;
    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);

    }
    alert("length of array is :"+ markers.length);
}