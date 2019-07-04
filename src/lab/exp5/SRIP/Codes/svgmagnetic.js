function myMove() {

if(window.value=="1" || window.value=="2" || window.value=="3" ){
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
arrowstart1();
evaluatebutton1();
}
  else
  {
    alert("Please select any option!");
  }
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
  if(window.value=="1" || window.value=="2" || window.value=="3" ){
  var x = document.getElementById("line2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
  toggletext1();
  arrowstart2();

  }
  else
  {
    alert("Please select an option");
  }

}
function toggletext1() {

  var x = document.getElementById("text2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

function arrowstart1()
{
   var x = document.getElementById("arrow1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }


}

function arrowstart2()
{
   var x = document.getElementById("arrowAnim");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }


}
function evaluatebutton1() {
  var x = document.getElementById("evaluatebutton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}