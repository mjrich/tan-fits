var TileJSONs = [
    'http://a.tiles.mapbox.com/v3/examples.map-20v6611k,maxrichman.tan-fits-cellaccess.jsonp',
    'http://a.tiles.mapbox.com/v3/maxrichman.tan-fits-cellaccess.jsonp',
    'http://a.tiles.mapbox.com/v3/maxrichman.tan-fits-mmuser.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-crime.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-crime-robbery.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-crime-theft.jsonp',
];

$('#map').mapbox(TileJSONs, function(map, tiledata) {

    // Assign readable names to all layers
    map.getLayerAt(0).named('base');
    map.getLayerAt(1).named('cellaccess');
    map.getLayerAt(2).named('mmuser');
    map.getLayerAt(3).named('crime');
    map.getLayerAt(4).named('robbery');
    map.getLayerAt(5).named('theft');

    // Don't composite base layer with other layers
    map.getLayer('base').composite(false);

    // Disable all overlay layers by default
    map.disableLayer('cellaccess');
    map.disableLayer('mmuser');
    map.disableLayer('crime');
    map.disableLayer('robbery');
    map.disableLayer('theft');

    // Set initial latitude, longitude and zoom level
    map.setCenterZoom({
        lat: -6.00953,
        lon: 37.9805
    }, 6);

    // Set minimum and maximum zoom levels
    map.setZoomRange(4, 12);

    // Enable share control
    mapbox.share().map(map).add();

    map.addLayer(mapbox.layer().id('maxrichman.tan-fits-cellaccess', function() {
    // this function runs after the layer is loaded
    // from MapBox and we know what interactive features are supported.
    map.interaction.auto();
    map.interaction.off('on');
    map.interaction.off('off');
    map.interaction.on({
        on: function(o) {
            document.getElementById('regionname').innerHTML = o.data.region;
            document.getElementById('cellaccess').innerHTML = Math.round(o.data.cellaccess *100) +'%';
            document.getElementById('mmuser').innerHTML = Math.round(o.data.mmuser *100) +'%';
            document.getElementById('registereduser').innerHTML = Math.round(o.data.registereduser *100) +'%';
            document.getElementById('rural').innerHTML = Math.round(o.data.rural *100) +'%';
            document.getElementById('poverty').innerHTML = Math.round(o.data.poverty *100) +'%';
            document.getElementById('unbanked').innerHTML = Math.round(o.data.rural *100) +'%';
            document.getElementById('rural').innerHTML = Math.round(o.data.rural *100) +'%';
            document.getElementById('poverty').innerHTML = Math.round(o.data.poverty *100) +'%';
            document.getElementById('unbanked').innerHTML = Math.round(o.data.rural *100) +'%';
            document.getElementById('mmstore').innerHTML = Math.round(o.data.mmstore *100) +'%';
            document.getElementById('agentproblem').innerHTML = Math.round(o.data.agentproblem *100) +'%';
            document.getElementById('owncell').innerHTML = Math.round(o.data.owncell *100) +'%';
            document.getElementById('ownsim').innerHTML = Math.round(o.data.ownsim *100) +'%';
        }
    });
}));

});
