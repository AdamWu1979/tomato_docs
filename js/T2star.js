var echoTimes = [0,     2,     4,     6,     8,    10,    12,    14,    16,    18,    20];
var blood    = [100.0,   80.1,   64.1,   51.3,   41.1,   32.9,   26.4,   21.1,   16.9,   13.5,   10.8];
var myo      = [100.0,   75.2,   56.5,   42.4,   31.9,   24.0,   18.0,   13.5,   10.2,    7.6,    5.7];

var dataBlood = new Array(echoTimes.length);
var dataMyo = new Array(echoTimes.length);

var i;
for (i = 0; i < echoTimes.length; i++) {
  dataBlood[i] = { x: echoTimes[i], y: blood[i]};
  dataMyo[i]   = { x: echoTimes[i], y: myo[i]};
}

var datasetBlood = { label: 'Blood', data: dataBlood, fill: false, borderColor: "#c45850" };
var datasetMyo = { label: 'Myocardium', data: dataMyo, fill: false, borderColor: "#3cba9f" };

var myxAxes = [{ type: 'linear', scaleLabel: { display: true, labelString: 'Echo time' } }];
var myyAxes = [{ type: 'linear', scaleLabel: { display: true, labelString: 'Magnetisation' } }];

var ctx = document.getElementById("chartT2star");
var scatterChart = new Chart(ctx, {
  type: 'line',
  data: { datasets: [datasetBlood, datasetMyo] },
  options: { scales: { xAxes: myxAxes, yAxes: myyAxes }}
});
