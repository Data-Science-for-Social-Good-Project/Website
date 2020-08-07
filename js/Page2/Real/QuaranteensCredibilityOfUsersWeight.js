// generalTweetCovidMemes3CredibilityOfTweets

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("generalTweetCovidMemes3CredibilityOfTweets");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["True","False"],
    datasets: [{
      label: "Frequency of Tweets",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [138,28],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Frequency'
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
