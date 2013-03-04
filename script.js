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

});
