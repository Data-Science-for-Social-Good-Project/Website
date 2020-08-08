// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("article");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["True","False"],
    datasets: [{
      label: "Label",
      backgroundColor: "#FFC6FF",
      borderColor: "#FFC6FF",
      data: [10, 1],
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
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10,
          maxTicksLimit: 6
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
