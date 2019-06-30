//window.onload = function () 
/*function plot(){
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
/*function benzenepress()
{
	var chart = new CanvasJS.Chart("benzenecanvas", {
	animationEnabled: true,
	exportEnabled: true,
	
	axisY:{ 
		
		includeZero: true, 
		interval: 200,
		gridThickness: .1,
		
	},
	axisX:{ 
		
		includeZero: true, 
		interval: 1,
		
		
	},
	data: [{
		type: "stepLine",
		
		markerSize: 1,
		dataPoints: [
			{ x: 4, y: 240 },
			{ x: 6, y: 440 },
			{ x: 9, y: 940 },
			{ x: 8, y: 1000 },
			/*{ x: new Date(2016, 1), y: 4 },
			{ x: new Date(2016, 2), y: 5 },
			{ x: new Date(2016, 3), y: 5 },
			{ x: new Date(2016, 4), y: 9 },
			{ x: new Date(2016, 5), y: 4 },
			{ x: new Date(2016, 6), y: 7 },
			{ x: new Date(2016, 7), y: 6 },
			{ x: new Date(2016, 8), y: 4 },
			{ x: new Date(2016, 9), y: 4 },
			{ x: new Date(2016, 10), y: 7 },
			{ x: new Date(2016, 11), y: 4 },
			{ x: new Date(2017, 0), y: 9 },
			{ x: new Date(2017, 1), y: 4 },
			{ x: new Date(2017, 2), y: 4 },
			{ x: new Date(2017, 3), y:3 },
			{ x: new Date(2017, 4), y:3 },
			{ x: new Date(2017, 5), y:5 }
		]
	}]
});
chart.render();

}

}*/
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	
	axisY:{ 
		
		includeZero: true, 
		interval: 200,
		gridThickness: .1,
		
	},
	axisX:{ 
		
		includeZero: false, 
		interval: 1,
		 gridThickness: .1,
		
		
	},
	data: [{
		type: "stepLine",
		
		markerSize: 1,
		dataPoints: [
			
			{ x: 1, y: 0.1 },
			{ x: 2, y: 0.1 },
			{ x: 2.7, y: 990 },
			{ x: 2.7, y: 0.1 },
			{ x: 4, y: 0.1 },
			{ x: 5, y: 0.1 },
			{ x: 6, y: 0.1 },
			{ x: 7, y: 0.1 },
			{ x: 8, y: 0.1 },
			{ x: 9, y: 0.1 },
			
			
		]
	}]
});
chart.render();

}
