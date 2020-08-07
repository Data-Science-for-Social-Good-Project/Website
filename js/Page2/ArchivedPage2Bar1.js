// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


/*
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "The Frequency of COVID-19 Related Posts from Groups on Twitter in 2020"
	},
	axisX: {
		interval: 1
	},
	axisY: {
		title: "Frequency",
		includeZero: true,
	},
	data: [{
		type: "bar",
		toolTipContent: "<img src=\"https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/\"{url}\"\" style=\"width:40px; height:20px;\"> <b>{label}</b><br>Frequency: {y} tweets<br>{gdp}% of Collected Tweets",
		dataPoints: [
			{ label: "March", y: 2, gdp: 6.5, url:"https://every-tuesday.com/wp-content/uploads/2017/03/march-2017-desktop-wallpapers-1200x580.jpg" },
			{ label: "April", y: 4, gdp: 12.9, url: "" },
			{ label: "May", y: 14, gdp: 45.2, url: ""},
			{ label: "June", y: 3, gdp: 9.7, url: "" },
			{ label: "July", y: 8, gdp: 25.9, url: "" },
		]
	}]
});
chart.render();

*/



// Bar Chart Example
var ctx = document.getElementById("barColor");
var barColor = new Chart(ctx, {
  type: 'bar',
	//text: "The Frequency of COVID-19 Related Posts from Groups on Twitter in 2020",
  data: {
    labels: ["Month","Frequency"],
    datasets: [{
      label: "March",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [2],
    },
    {
      label: "April",
      backgroundColor: "rgba(204,0,51,1)",
      borderColor: "rgba(204,0,51,1)",
      data: [4],
    },
    {
      label: "May",
      backgroundColor: "rgba(153,0,51,1)",
      borderColor: "rgba(153,0,51,1)",
      data: [14],
    },
    {
      label: "June",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [3],
    },
    {
      label: "July",
      backgroundColor: "rgba(204,0,51,1)",
      borderColor: "rgba(204,0,51,1)",
      data: [8],
    },

    ],
  },
  options: {
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        time: {
          unit: 'Twitter Group'
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
          max: 20,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
