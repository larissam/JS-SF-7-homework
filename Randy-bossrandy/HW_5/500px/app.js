$(document).ready(function() {
	_500px.init({
		sdk_key: '{SDK_KEY}'
	});
});

$("#login").on('click', function () {
	_500px.login();

	_500px.on('authorization_obtained', function() {
		console.log('LOGIN GOOD');

		$('.sign-in-view').fadeOut();
		$('.image-results-view').fadeIn();

		if (navigator.geolocation) {
			searchLocation();
		}
		else {
			$('.images').append('Sorry, browser geo locacation no work');
		}
	});
})

function searchLocation() {
		navigator.geolocation.getCurrentPosition(function(data) {
		var lat = data.coords.latitude;
		var long = data.coords.longitude;
		var rad = '25mi';

		console.log('Location Lat: ' + lat);
		console.log('Location Long: ' + long);

		var searchOptions = {
			geo: lat + ',' + long + ',' + rad,
			only: 'Landscapes',
			sort: 'highest_rating',
			rpp: 28,
			image_size: 3
		}

		_500px.api('/photos/search', searchOptions, searchDone)
	});
}

function searchDone(resp) {
	//console.log(resp.data.total_items);
	//console.log(resp.data.photos)

	resp.data.photos.forEach(function(obj, idx) {
		console.log(obj.image_url);

		var $img = $('<img>').attr({ src: obj.image_url}).addClass('image');
		$('.images').append($img);
	})

	
}




