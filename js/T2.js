var echoTimes = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
var blood    = [100.0,   68.1,   46.3,   31.5,   21.5,   14.6,   10.0,    6.8,    4.6 ,    3.1 ,    2.1];
var myo      = [100.0,   36.8,   13.5,    5.0,    1.8,    0.7,    0.3,    0.1,    0.03,    0.01,    0.004];

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

var ctx = document.getElementById("chartT2");
var scatterChart = new Chart(ctx, {
  type: 'line',
  data: { datasets: [datasetBlood, datasetMyo] },
  options: { scales: { xAxes: myxAxes, yAxes: myyAxes }}
});
