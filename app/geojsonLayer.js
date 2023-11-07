// Crea un nuevo grupo de clusters (paquete) de marcadores
var markers = L.markerClusterGroup({
    iconCreateFunction: function (cluster) {
        return L.icon({ iconUrl: '../assets/heatmap.png', iconSize: [25, 25] });
    }
});

// Crea una capa GeoJSON con los datos
var geojsonLayer = L.geoJSON(geojsonFeature, {
    pointToLayer: function (feature, latlng) {
        var marker = L.marker(latlng, { icon: Icono1 });
        marker.bindPopup(feature.properties.name + ', ' + feature.properties.adress);
        return marker;
    }
});

// Agrega la capa GeoJSON al grupo de clusters de marcadores
markers.addLayer(geojsonLayer);

// Agrega el grupo de clusters de marcadores al mapa
map.addLayer(markers);

var overlayMaps = {
    "Droguerias": markers
};
// añade tanto las capas que se crean en el modulo map.js asi como tambien la capa de marcadores
L.control.layers(baseLayers, overlayMaps).addTo(map);
