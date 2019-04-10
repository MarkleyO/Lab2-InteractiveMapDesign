var mymap = L.map('map',{
  center: [44.12, -119.93],
  zoom: 7,
  maxZoom: 10,
  minZoom: 3,
  detectRetina: true
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

var cellTowers = null;

cellTowers = L.geojson.ajax("assets/cell_towers.geojson",{
  attribution: 'CellTower Data &copy; map Cruzin | Oregon counties &copy; Oregon Explorer | Base Map &copy; CartoDB | made By Bo Zhao'
});

cellTowers.addTo(mymap);

var colors = chroma.scale('Set2').mode('1.ch').colors(9);

for(i=0; i<9; i++){
  $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}
