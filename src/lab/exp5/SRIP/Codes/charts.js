function plot()
{
  if(document.getElementById("ttcontent").style.background=="#DC143C")
    plotbenzene();
  else if (document.getElementById("ttcontent").style.background=="#00FF00")
    plotacetaldehyde();
  else
    plotacetate();


}

function plotbenzene() {
 document.getElementById("chartContainer").style.display="block";
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
			
			{ x: 1, y: 0.3 },
			{ x: 2, y: 0.3 },
			{ x: 2.7, y: 990 },
			{ x: 2.7, y: 0.3 },
			{ x: 4, y: 0.3 },
			{ x: 5, y: 0.3 },
			{ x: 6, y: 0.3 },
			{ x: 7, y: 0.3 },
			{ x: 8, y: 0.3 },
			{ x: 9, y: 0.3 },
			
			
		]
	}]
});
chart.render();

}
function plotacetaldehyde() {
 document.getElementById("chartContainer").style.display="block";
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
			
			{ x: 0.3, y: 210 },
			{ x: 0.3, y: 0.3 },
			{ x: 1, y: 0.3 },
			{ x: 2, y: 0.3 },
			{ x: 3, y: 0.3 },
			{ x: 4, y: 0.3 },
			{ x: 5, y: 0.3 },
			{ x: 6, y: 0.3 },
			{ x: 7, y: 0.3 },
			{ x: 7.8, y: 998 },
			{ x: 7.8, y: 0.3 },
			
			
			
		]
	}]
});
chart.render();

}
function plotacetate() {
 document.getElementById("chartContainer").style.display="block";
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
			
			{ x: 1, y: 0.3,label: "9"  },
			{ x: 2, y: 0.3,label: "8"  },
			{ x: 3, y: 0.3 ,label: "7" },
			{ x: 4, y: 0.3,label: "6"  },
			{ x: 5, y: 0.3,label: "5"  },
			{ x: 5.81, y: 80 },
			{ x: 5.81, y: 0.3 },
            { x: 5.87, y: 170 },
			{ x: 5.87, y: 0.3 },
			{ x: 5.92, y: 190 },
			{x:5.92 ,y:0.3},
			{ x: 6, y: 100,label: "4"  },
			{ x: 6, y: 0.3,label: "3"  },
			{ x: 7, y: 0.3 ,label: "2" },
			{ x: 8, y: 999,label: "1"  },
			{ x: 8, y: 0.3 },
			{ x: 9, y: 0.3,label: "0"  },
			
		]
	}]
});
chart.render();

}