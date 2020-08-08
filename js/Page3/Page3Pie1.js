// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pie31").getContext('2d');
var pieShape = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["True","False","Non-Verifiable"],
    datasets: [{
      backgroundColor: [
        "#003f5c",
        "#ffa600",
        "#9e0000",
      ],
      data: [110,28,71]
    }]
  }
});