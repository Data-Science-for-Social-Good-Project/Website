// generalTweetCovidMemes3CredibilityOfTweets

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("generalTweetCovidMemes3CredibilityOfTweets");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["True","False","Non-Verifiable"],
    datasets: [{
      label: "Frequency of Tweets",
      backgroundColor: "#A0C4FF",
      borderColor: "#A0C4FF",
      data: [19,8,9],
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
