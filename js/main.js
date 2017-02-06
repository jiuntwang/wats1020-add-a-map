// Map

$(document).ready(function() {

  
//Default Map
var defaultLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mapbox/streets-v10',
    accessToken: 'pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw'
});
  
  
// Satellite Map
var satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw'
});
  
// Define map default position, coordinates, zoom, and layers
var mymap = L.map('map-container', {
    center: [46.852, -121.760],
    zoom: 13,
    layers: [defaultLayer, satelliteLayer]
});
 

// Markers of interesting locations
var marker = L.marker([46.852, -121.760]).addTo(mymap);
marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.").openPopup();
  

// Define map layers
var selectMaps = {
    "Default": defaultLayer,
    "Satellite": satelliteLayer,
};  
    
// Select map layers control
L.control.layers(selectMaps).addTo(mymap);   
 

 
});



