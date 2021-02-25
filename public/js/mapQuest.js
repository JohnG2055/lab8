function initMap() {
	// add your code here
	L.mapquest.key = 'NUHswJ4Y963moZj6RX3KHuOwAypKrG9r';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8787185079349, -117.2359611035316],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add a marker to this map
	L.marker([32.8787185079349, -117.2359611035316]).addTo(map);
}