var map;

var birdCages = [
	{
		pos: new google.maps.LatLng(52.1497977,5.3984084,17),
		radius: 30
	},
	{
		pos: new google.maps.LatLng(52.1478986,5.3426726),
		radius: 40
	}
];

function initializeMaps() {
	
	map = new google.maps.Map($('#map-canvas')[0], {
		zoom: window.innerWidth < 768 ? 12 : 13,
		center: new google.maps.LatLng(52.14550524365487, 5.383388029516611),
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
			radius: birdCages[birdCage].radius || 40 //Default wifi radius
		});
		new google.maps.Marker({
			position: birdCages[birdCage].pos,
			map: map,
			title: 'Een vogelhuisje.'
		});
	}
}

google.maps.event.addDomListener(window, 'load', initializeMaps);

window.onresize = initializeMaps;