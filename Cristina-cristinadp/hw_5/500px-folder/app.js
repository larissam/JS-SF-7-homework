
  $(document).ready(function () {
    _500px.init({
      sdk_key: '99bfded3bfe5b5cf124d7c694d1eef66676c5046'
    });

    $('#login').click(function() {
      _500px.login();
      _500px.on('authorization_obtained', function() {
        $('.sign-in-view').hide();
        $('.image-results-view').show();

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
              sort: 'rating', 
              rpp: 28
            };

            _500px.api('/photos/search', searchOptions, function(response) {
              if (response.data.photos.length === 0) {
                console.log("No photos found");
              } else {
                $.each(response.data.photos, function() {
                    var image = $("<img>").attr("src", this.image_url).addClass("image");
                    $(".images").append(image);
                });
              }
            });
          })
        } else {
          $('.images').append('Sorry, your browser does not support geolocation');
        }

        // get user's info
        var userCb =  function(response) {
            var helloName = response.data.user.firstname;
            if (helloName == null || helloName == " ") {
                helloName = response.data.user.username;
            }
            var user = $('<h2>').text("Welcome " + helloName + " :)");
            $(".userInfo").append(user);
        };

        _500px.api('/users', userCb)
      });
    });
  });





