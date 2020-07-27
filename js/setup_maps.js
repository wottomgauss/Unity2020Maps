// This is the main Javascript file
// Leaflet map is loaded with basemaps and our custom maps
// Full description of the technology stack explained here:
//https://medium.com/@kennethchambers/using-tippecanoe-tileserver-gl-and-leaflet-to-serve-scale-independent-and-really-cool-looking-751368d821c7


// Clever method to detect if the client is a mobile browser
var isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)

if (isMobile)
{
    // Remove side panel if on Mobile
    d3.select("#panel").remove()

    // Problem: leaflet map is not rendering!
}
else
{
    // Build the side panel
    build_desktop_panel()
}


// Initialize Map
var map = L.map('mapid').setView([37, -95], 5)

// This code automatically zooms to user's location after asking for location access rights - but it doesn't work?
//map.locate({setView: true})

var geocoder = L.Control.geocoder({
    collapsed: false,
    placeholder: "Search..."})
    .on('markgeocode', function(e) {
	var bbox = e.geocode.bbox;
	var poly = L.polygon([
	    bbox.getSouthEast(),
	    bbox.getNorthEast(),
	    bbox.getNorthWest(),
	    bbox.getSouthWest()
	])
	map.fitBounds(poly.getBounds());
    })
    .addTo(map);

// Print map
L.control.browserPrint({manualMode: true}).addTo(map)

// Move leaflet 'control' off the map
var newParent = document.getElementById('custom-map-controls');
var oldParent = document.getElementsByClassName("leaflet-top leaflet-right")

while (oldParent[0].childNodes.length > 0) {
    newParent.appendChild(oldParent[0].childNodes[0]);
}



// Add basemap from Stamen
var base_layer = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}.png', {
    attribution: 'Stamen Maps (maps.stamen.com)',
    maxZoom: 18,
    id: 'lines',
    tileSize: 512,
    zoomOffset: -1,
})

// Add basemap labels so that they appear on top of all other layers
var base_labels = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png', {
    attribution: 'Stamen Maps (maps.stamen.com)',
    maxZoom: 18,
    id: 'labels',
    tileSize: 512,
    zoomOffset: -1,
})

// URL of the AWS server with Tileserver running
var url = "https://maps443.tcpdump.rocks/data/precentile_precincts/{z}/{x}/{y}.pbf"

// Add our map
var unity_map = L.vectorGrid.protobuf(url, {
    maxZoom: 20,
    vectorTileLayerStyles: {
	interactive: true,
	percentile_precincts_1: properties => {
	    return getColorFromProperty(properties)
	}
    },
    // MUST include attribution - where we got this data
    attribution: ' 2016 Precinct-Level Election Results - Harvard Datasource: Voting and Election Science Team, University of Florida and Witchita State University',
    
})

// Add our layer to the map, in the right order for visibility
base_layer.addTo(map)
unity_map.addTo(map)
base_labels.addTo(map)


// For development purposes - log the current zoom level
map.on('zoomend', function() {
    console.log("Zoom: " + map.getZoom())
});

// Callback when user clicks on a feature. Not working yet! Goal is to have a pop-up text showing full voter details of the area
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: clickFeature
    });
}

function clickFeature(d)
{
    console.log(d)
}
