// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("Page3Line");
var lineProgress = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1-15",
    "Mar 16-31",
    "Apr 1-15",
    "Apr 16-30",
    "May 1-15",
    "May 16-31",
    "Jun 1-15",
    "Jun 16-30",
    "Jul 1-15",
    "Jul 16-31"],
    datasets: [{
      label: "CovidMemes3",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [12,15,18,9,16,10,11,7,12,18],
    },
    {
      label: "Coronavirus Memes for Self-Isolating Teens",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(290,101,211,0.2)",
      borderColor: "rgba(290,101,211,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(290,101,211,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(290,101,211,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [2,5,4,3,1,2,0,2,2,4],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 20,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
