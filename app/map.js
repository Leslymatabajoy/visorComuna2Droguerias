// esta seccion crea el mapa
var map = L.map('map', {
  center: [3.4667822154886214, -76.53100337169667],
  zoom: 13,
  maxZoom: 18,
  minZoom: 13,
  maxBounds: L.latLngBounds(L.latLng(-200, -280), L.latLng(200, 280)),
});
// esta seccion define los mapas base que se utilizarán
var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
}).addTo(map);

var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
});
// esta seccion organiza en un objeto las cartografias base
var baseLayers = {
  "Cartografia Base": CartoDB_Voyager,
  "Satelite": Esri_WorldImagery,
  "Cartografia Nocturna": CartoDB_DarkMatter
}
// esta linea añade el controlador de escala al mapa
L.control.scale().addTo(map);
// esta linea define los pocos parametros que el metodo AutoGraticule permite
var options = {
  redraw: 'moveend',
  minDistance: 100
};
// en esta linea se añade la grilla al mapa con AutoGraticule
new L.AutoGraticule(options).addTo(map);
// esta seccion añade la funcion de busqueda al mapa - geocodificacion
L.Control.geocoder({
  position: 'topleft'
}).addTo(map);