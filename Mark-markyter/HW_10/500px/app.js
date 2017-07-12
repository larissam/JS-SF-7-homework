$(document).ready(function() {
	_500px.init({
		sdk_key: 'ce2515231441ad790e7f4f992ab74e861a02731e'
	});

	$('#login').click(function() {
		_500px.login();
		_500px.on('authorization_obtained', function() {
			console.log("barrel-aged, grade-a dank memes discovered");
			$('.sign-in-view').hide();
			$('.image-results-view').show();

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var lat = position.coords.latitude;
					var long = position.coords.longitude;

					console.log('lat: ' + lat);
					console.log('lat: ' + lat);

					var radius = '25mi';

					var searchOptions = {
						geo: lat + ',' + long + ',' + radius,
						only: 'Animals',
						tag: 'dog',
						rpp: 99,
						sort: 'highest_rating',
						image_size: 440
					};

					_500px.api('/photos/search', searchOptions, function(response) {
						if (response.data.photos.length === 0) {
							console.log('No photos found');
						} else {
							console.log('Request succeeded');
							var photoObj = response.data.photos;

							for (var i = photoObj.length - 1; i >= 0; i--) {
								var locationURL = photoObj[i].image_url;
								$('.images').append( $('<img>').attr('src', locationURL ).addClass('image') );
							}
						}
					});

				});
			
			} else {

				$('.images').append('Sorry, your browser does not support geolocation');

			}
		})
	});
});
