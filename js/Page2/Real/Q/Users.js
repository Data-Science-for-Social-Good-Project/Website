// covidMemes3CredibilityOfUsers


// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("Users");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Verified Users","Unverified Users"],
    datasets: [{
      label: "Frequency",
      backgroundColor: "#9BF6FF",
      borderColor: "#9BF6FF",
      data: [5,5],
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
          max: 10,
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
