function initMap() {
  var map;

  var map_center = {lat: 48.400, lng: -4.483};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: map_center,
    scrollwheel: false,
    zoom: 12
  });

  google.maps.event.addDomListener(window, 'load', manageMap(map));
}

function manageMap(map) {
  $.getJSON('assets/json/salle.json', function(donnees) {
    setMarkers(donnees.salle,map);
  });
}


var markers = [];
function setMarkers(markers,map) {
	for (var i = 0; i < markers.length; i++) {
		var salle = markers[i];
		var salleLatLng = new google.maps.LatLng(salle.latitude, salle.longitude);

    var contentString =
      '<div id="content">' +
        '<address>' +
          '<strong>' + salle.nom + '</strong><br>' +
          salle.adresse + '<br>' +
          salle.codePostal + ', ' + salle.commune + '<br>' +
          salle.latitude + ', ' + salle.longitude + '<br>' +
          '<a href="' + salle.itineraire + '" target="_blank" class="btn btn-primary btn-xs text-center">Itinéraire</a>' +
        '</address>' +
      '</div>';

		var marker = new google.maps.Marker({
			position: salleLatLng,
			map: map,
			title: salle.nom,
      label: salle.label,
			html: contentString,
      icon: 'assets/images/handball.png',
			// Markers drop on the map
			animation: google.maps.Animation.DROP
		});

		google.maps.event.addListener(marker, "click", function () {
      var infoWindow = new google.maps.InfoWindow({
        content: this.html
      });
      if (typeof( window.infoopened ) != 'undefined') infoopened.close();
      infoWindow.open(map,this);
      infoopened = infoWindow;
		});
	}
}
