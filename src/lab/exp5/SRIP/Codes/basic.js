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
function Evaluate()
{
  if(document.getElementById("ttcontent").background=="#DC143C")
    window.open("../../plot_benzene.html", ' '); 
  else if (document.getElementById("ttcontent").background=="#00FF00")
    window.open("../../plot_acetaldehyde.html", ' '); 
  else
    window.open("../../plot_ethylacetate.html",' ');


}

