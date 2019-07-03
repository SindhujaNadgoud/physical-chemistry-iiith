function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, .1);
  function frame() 
  {
    if ( pos==150    ) {
      clearInterval(id);
    } 
      else {
        pos++; 
      elem.style.top = pos + 'px'; 
      
      //elem.style.left = pos + 'px'; 
           }
  }

toggle1();
toggletext();


  
}


function toggle1() {

  var x = document.getElementById("line1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function toggletext() {

  var x = document.getElementById("text1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function myMove1()
{
  var x = document.getElementById("line2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
  toggletext1();
  arrowstop();

}
function toggletext1() {

  var x = document.getElementById("text2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

function arrowstop()
{
 var i=document.getElementById("arrow");
 var v=1;
 
 if (i.style.display === "none") {
    document.write(v);
  } else {
    i.style.display = "block";
  }
  


}