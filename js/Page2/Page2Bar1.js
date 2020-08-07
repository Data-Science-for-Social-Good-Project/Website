// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barColor");
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["CovidMemes3","Corona Memes for Self-Isolating Teens"],
    datasets: [{
      label: "Average Number of Covid-Related Posts per User",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [5.8,2.5],
    },
    {
      label: "Percent of Members with Covid-Related Posts",
      backgroundColor: "rgba(204,0,51,1)",
      borderColor: "rgba(204,0,51,1)",
      data: [14.81,4.33],
    },
    {
      label: "Percent of Members with Verifiable Covid-Related Posts",
      backgroundColor: "rgba(153,0,51,1)",
      borderColor: "rgba(153,0,51,1)",
      data: [11.11,2.16],
    }
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
