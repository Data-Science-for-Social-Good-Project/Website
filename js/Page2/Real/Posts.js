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
        "#FFADAD",
        "#FFD6A5",
        "#FDFFB6",
        "#CAFFBF",
        "#9BF6FF",
        "#A0C4FF",
        "#BDB2FF",
        "#FFC6FF",
        "#F6BD60",
        "#F7EDE2",
        "#F5CAC3",
        "#84A59D",
        "#F28482"
      ],
      data: [17, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]
    }]
  }
});