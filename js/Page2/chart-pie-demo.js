// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pieColor").getContext('2d');
var pieColor = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["@covid19andunder", "@BlogHe", "@DrStephCraig", "@flavorsamerica", "@KashaDuff", "@LeicesterYpc", "@MsEMcCann", "@NazillaKhanlou", "@RosMcM", "@SheKnows", "@teenergizer", "@thechance2b", "@TweetMichelleM"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [17, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]
    }]
  }
});