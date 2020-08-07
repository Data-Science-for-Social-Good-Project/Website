/*
window.onload = function () {
var ctx = document.getElementById("chartContainer");
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "COVID-19 Related Tweets of Twitter Groups and Its Credibility"
	},
	axisY: {
		title: "Frequency"
	},
	data: [{        
		type: "column",  
		//showInLegend: true, 
		//legendMarkerColor: "grey",
		//legendText: "Label",
		dataPoints: [      
			{ y: 1, label: "Unknown" },
			{ y: 32,  label: "Real" },
			{ y: 1,  label: "Fake" },
		]
	}]
});
chart.render();
*/

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("chartContainer");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Unknown","Real","Fake"],
    datasets: [{
      label: "Label",
      backgroundColor: "#BDB2FF",
      borderColor: "#BDB2FF",
      data: [1, 32, 1],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Twitter Account'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

