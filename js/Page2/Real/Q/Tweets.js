// tweetCovidMemes3CredibilityOfTweets

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("tweet");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["True","False","Non-verifiable"],
    datasets: [{
      label: "Label",
      backgroundColor: "#BDB2FF",
      borderColor: "#BDB2FF",
      data: [8, 3, 14],
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
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 16,
          maxTicksLimit: 20
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
