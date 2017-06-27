  $(document).ready(function () {
    _500px.init({      //references the 500px jquery library
      sdk_key: 'XXX'
    });

    $('#login').click(function(){
      _500px.login();   //predefined method that takes care of OAuth process
      _500px.on('authorization_obtained', function() {
        //console.log("authorization obtained");
        $('.sign-in-view').hide();
        $('.image-results-view').show();

        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position){
            var lat = position.coords.latitude;   //selecting values within existing objects
            var long = position.coords.longitude;

            //console.log('lat ' + lat);
            //console.log('long ' + long);

            var radius = '25mi';

            var searchOptions = {   //creating object with key-value pairs
               geo: lat + ',' + long + ',' + radius, 
               only: 'Landscapes',
               sort: 'rating',
               rpp: 28
            };

            _500px.api('/photos/search', searchOptions, function(response){
              if (response.data.photos.length === 0) {    //checks if the array photos in the response's data has nothing in it
                console.log("No photos found.");
              } else {
                console.log("Request succeeded.");

                response.data.photos.forEach(function(displayImages){  

                  $('.images').append($('<img>').attr('src',displayImages.image_url).addClass('image'));
                  console.log(displayImages.rating);

                })                
               
              }
            })
        }) 
        } else {
          $('.images').append('Sorry, your browser does not support geolocation.');
        }
      });  
  });
});

//every time we iterate thru this, create img element w/ url and src attribute, then append to div w/ class images
