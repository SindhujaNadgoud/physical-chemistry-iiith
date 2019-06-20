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
}

function Evaluate()
{
  if(document.getElementById("ttcontent").style.background=="#00FF00")
    window.open("file:///C:/Desktop/GitBash/Git/SRIP/physical-chemistry-iiith/src/lab/exp5/SRIP/Codes/plot_acetaldehyde.html", ' '); 
  else if (document.getElementById("ttcontent").style.background=="#00FF00")
    window.open("file:///C:/Desktop/GitBash/Git/SRIP/physical-chemistry-iiith/src/lab/exp5/SRIP/Codes/plot_benzene.html", ' '); 
  else
    window.open("file:///C:/Desktop/GitBash/Git/SRIP/physical-chemistry-iiith/src/lab/exp5/SRIP/Codes/plot_ethylacetate.html",' ');


}














