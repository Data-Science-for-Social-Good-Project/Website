// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barColor");
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["CovidMemes3","Coronavirus Memes for Self-Isolating Teens"],
    datasets: [{
      label: "Average Number of Covid-Related Posts per User",
      backgroundColor: "#2f4b7c",
      borderColor: "#2f4b7c",
      data: [5.8,2.5],
    },
    {
      label: "Percent of Members with Covid-Related Posts",
      backgroundColor: "#9e0000",
      borderColor: "#9e0000",
      data: [14.81,4.33],
    },
    {
      label: "Percent of Members with Verifiable Covid-Related Posts",
      backgroundColor: "#ff7c43",
      borderColor: "#ff7c43",
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
