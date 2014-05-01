var map;

var birdCages = [
	{
		pos: new google.maps.LatLng(52.1497977,5.3984084,17),
		radius: 10
	}
];

function initializeMaps() {
	
	map = new google.maps.Map($('#map-canvas')[0], {
		zoom: 14,
		center: new google.maps.LatLng(52.1497977, 5.3984084,17),
		disableDefaultUI: true
	});

	for(var birdCage in birdCages) {
		new google.maps.Circle({
			strokeColor: '#ff2215',
			strokeOpacity: 1,
			strokeWeight: 2,
			fillColor: '#ff2215',
			fillOpacity: 0.5,
			map: map,
			center: birdCages[birdCage].pos,
			radius: 10 || birdCages[birdCage].radius //Default wifi radius
		});
		new google.maps.Marker({
			position: birdCages[birdCage].pos,
			map: map,
			title: 'Een vogelhuisje.'
		});
	}
}

google.maps.event.addDomListener(window, 'load', initializeMaps);