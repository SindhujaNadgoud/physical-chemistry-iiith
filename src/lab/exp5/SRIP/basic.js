
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function Benzene() {

    document.getElementById("ttcontent").style.background="#DC143C";
}
function Acetaldehyde() {

    document.getElementById("ttcontent").style.background=" #0000FF";
}
function Acetate() {

    document.getElementById("ttcontent").style.background="#00FF00";
}
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 150 ) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
}






