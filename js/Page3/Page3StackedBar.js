Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("stackedBar").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["True","False","Non-Verifiable"],
        datasets: [{
            label: "CovidMemes3",
            backgroundColor: "#003f5c",
            data: [19,8,9],
        }, {
            label: "Coronavirus Memes for Self-Isolating Teens",
            backgroundColor: "#ffa600",
            data: [4,1,5],
        }, {
            label: "General Search",
            backgroundColor: "#9e0000",
            data: [14,1,1],
        }],
    },
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
        responsive: true,
        maintainAspectRatio: true,
        legend: { position: 'bottom' },
    }
});