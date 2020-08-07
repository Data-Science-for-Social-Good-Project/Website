// covidMemes3CredibilityOfUsersWeight


// Set new default font family and font color to mimic Bootstrap's default styling



// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("covidMemes3CredibilityOfUsersWeight").getContext('2d');
var pieColor = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Verified Users", "Unverified Users"],
    datasets: [{
      backgroundColor: [
        "#FFADAD",
        "#FFD6A5"
      ],
      data: [75, 15]
    }]
  }
});


/*
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("covidMemes3CredibilityOfUsersWeight");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Verified Users","Unverified Users"],
    datasets: [{
      label: "Percentage",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [75,15],
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
          max: 30,
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
*/