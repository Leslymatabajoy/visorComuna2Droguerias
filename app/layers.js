// se guarda en una variable el metodo heatLayer de leaflet el cual crea el mapa de calor
var heatLayer = L.heatLayer(geojsonLayer.toGeoJSON().features.map(function(feature) {
    return feature.geometry.coordinates.reverse(); 
}), {
    radius: 50, 
    blur: 13,
});

// se guarda en una variable la capa WMS de comunas cali y se añade al mapa
var wmsLayer = L.tileLayer.wms('http://ws-idesc.cali.gov.co:8081/geoserver/idesc/wms', {
    layers: 'idesc:mc_comunas',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    srs: 'EPSG:6249',
    zIndex: 999
}).addTo(map);