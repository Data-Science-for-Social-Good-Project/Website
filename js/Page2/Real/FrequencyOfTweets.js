/*
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
*/

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barShape");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["March","April","May","June","July"],
    datasets: [{
      label: "Frequency of Tweets",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [2,4,14,3,8],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Month'
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
      display: false
    }
  }
});
