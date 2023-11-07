// boton cambio de iconos
var boton = L.control({ position: 'topright' });
boton.onAdd = function () {
    var div = L.DomUtil.create('div', 'mi-boton');
    div.innerHTML = '<button id="boton-cambiar-icono"><div class="img-button"/></button>';
    return div;
};
boton.addTo(map);
//boton ubicacion gps
var gpsBoton = L.control({ position: 'topright' });
gpsBoton.onAdd = function () {
    var div = L.DomUtil.create('div', 'mi-boton-gps');
    div.innerHTML = '<button id="boton-gps"><div class="img-button-gps"/></button>';
    return div;
};
gpsBoton.addTo(map);
// boton mapa de calor
var calorBoton = L.control({ position: 'topright' });
calorBoton.onAdd = function () {
    var div = L.DomUtil.create('div', 'mi-boton-calor');
    div.innerHTML = '<button id="boton-mapa-calor"><div class="boton-calor"/></button>';
    return div;
};
calorBoton.addTo(map);
