var invTimes = [  100,  180,  260, 1715, 3337, 4907, 6455];
var blood    = [  -55,  -49,  -29,   22,   51,   61,   64];
var myo      = [  -49,  -40,  -26,   42,   59,   62,   63];

var dataBlood = new Array(invTimes.length);
var dataMyo = new Array(invTimes.length);

var i;
for (i = 0; i < invTimes.length; i++) {
  dataBlood[i] = { x: invTimes[i], y: blood[i]};
  dataMyo[i]   = { x: invTimes[i], y: myo[i]};
}

var datasetBlood = { label: 'Blood', data: dataBlood, fill: false, borderColor: "#c45850" }
var datasetMyo = { label: 'Myocardium', data: dataMyo, fill: false, borderColor: "#3cba9f" }

var xAxes: { type: 'linear', scaleLabel: { display: true, labelString: 'Inversion time' } }
var yAxes: { type: 'linear', scaleLabel: { display: true, labelString: 'Magnetisation' } }

var ctx = document.getElementById("chartT1");
var scatterChart = new Chart(ctx, {
  type: 'line',
  data: { datasets: [datasetBlood, datasetMyo] },
  options: { scales: { xAxes: xAxes, yAxes: yAxes }}
});
