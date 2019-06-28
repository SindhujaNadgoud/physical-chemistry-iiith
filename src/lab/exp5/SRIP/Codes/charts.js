//window.onload = function () 
function plot(){
document.getElementById("chartContainer").style.display = "block";
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	
	axisY:{
		includeZero: true
	},
	
    
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: 0,label:9},
			{ y: 0,label:8},
			{ y: 0,label:7 },
			{ y: 0 ,label:6},
			{ y: 0 ,label:5},
			{ y: 190 ,label:4},
			{ y: 200,label:3 },
			{ y: 992 ,label:2},
			{ y: 580 ,label:1},
			{ y: 0 ,label:0},
			
		]
		//labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	}]
});
chart.render();

}