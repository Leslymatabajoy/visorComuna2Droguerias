// se busca el elemento con id boton-cambiar-icono y se define un evento onclick el cual cambia los iconos
document.getElementById("boton-cambiar-icono").addEventListener("click", function () {
    geojsonLayer.eachLayer(function (layer) {
        if (layer.options.icon === Icono1) {
            layer.setIcon(Icono2);
        } else {
            layer.setIcon(Icono1);
        }
    });
});
// se define una funcion de localizacion el cual añade un marcador a la localizacion del dispositivo y le proporciona un marcador ya establecido en el modulo iconos.js
function onLocationFound(e) {
    var radius = e.accuracy / 2; // El radio de la circunferencia es la mitad de la precisión
    // Añadir un marcador al mapa en la ubicación encontrada
    var marcador = L.marker(e.latlng).addTo(map)
        .bindPopup("Esta es tu ubicacion actual").openPopup();
    // Cambiar el icono del marcador
    marcador.setIcon(markerIcon);
    // Añadir una circunferencia al mapa alrededor de la ubicación encontrada
    L.circle(e.latlng, radius).addTo(map);
}

// Añadir un controlador de eventos para el evento 'locationfound'
map.on('locationfound', onLocationFound);

// se busca el elememnto con id boton-gps y se le añade un evento onclick el cual ejecuta la funcion de busqueda
document.getElementById("boton-gps").addEventListener("click", function () {
    map.locate({ setView: true, maxZoom: 16 });
});

//activa mapa de calor definido en el modulo layers.js
heatLayer.addTo(map);
var heat = true;
// busca el elemento .................ejecuta evento onclick........revisa si esta pintando el mapa de calor y lo desactiva o lo activa dependiendo su "estado"
document.getElementById('boton-mapa-calor').addEventListener('click', function () {
    if (heat) {
        map.removeLayer(heatLayer);
    } else {
        heatLayer.addTo(map);
    }
    heat = !heat;
});
