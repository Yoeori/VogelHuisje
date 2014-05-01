var citymap = {};
citymap['chicago'] = {
  center: new google.maps.LatLng(52.1497977,5.3984084,17),
	radius: 10
};
var cityCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(52.1497977, 5.3984084,17),
	disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Construct the circle for each value in citymap.
  // Note: We scale the population by a factor of 20.
  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: citymap[city].radius
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);