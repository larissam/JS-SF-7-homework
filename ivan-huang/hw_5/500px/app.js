 /*
 Pseudocode for adding images to app:
loop through results (which are in an array)
-get the URL for the current element
-create a new `img` element
-specify the URL as the value of the `src` attribute for the `img` element
-append the `img` element to the `div` with the class value `images`
 */
 
 $(document).ready(function () {
    _500px.init({
      sdk_key: '43233539f52350b791a84aefb258d1aa3c5e81ee'
    });

    $('#login').click(function() {
      _500px.login();
      _500px.on('authorization_obtained', function() {
        $('.sign-in-view').hide();
        $('.image-results-view').show();

        _500px.getAuthorizationStatus();

        if (navigator.geolocation) {

          navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            console.log('lat: ' + lat);
            console.log('long: ' + long);

            var radius = '25mi';

            var searchOptions = {
              geo: lat + ',' + long + ',' + radius,
              only: 'Landscapes',
              rpp: 20,
              image_size: 400,
              sort: 'highest_rating'
            };

            _500px.api('/photos/search', searchOptions, function(response) {
              if (response.data.photos.length === 0) {
                console.log("No photos found");
              } else {
                handleResponseSuccess(response);
              }
            });
          })
        } else {
          $('.images').append('Sorry, your browser does not support geolocation');
        }
      });
    });
  });

function handleResponseSuccess(response) {
  var allData = response.data.photos;
  
  $.each(allData, function() {
    var element = $('<img>').attr('src', this.image_url).addClass('image');
    $('.images').append(element);
  });
}


