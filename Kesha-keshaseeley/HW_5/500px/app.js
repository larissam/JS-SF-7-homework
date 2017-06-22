// single page app (SPA) using OAuth, API and SDK documentation + geolocation

$(document).ready(function () {
  // reference to the 500px library with .init() method
  // initialize the 500px SDK
  _500px.init({
    // add sdk key here - from application
    sdk_key: 'bc51e0dd4aa09725bcb7c86af2625cd61b333155'
  });

  $('#login').on('click', function(){
    // OAuth method from 500px SDK documentation (https://github.com/500px/500px-js-sdk#logging-a-user-in)
    // token is requested and returned
    _500px.login();
    // callback below function is called on authorization
    _500px.on('authorization_obtained', function(){
      // console.log('authorization obtained');
      // changes view after login, DOM manipulation
      $('.sign-in-view').hide();
      $('.image-results-view').show();


      // checks to see if the users' current browser has geolocation enabled
      if (navigator.geolocation) {
        // navigator.geolocation from MDN
        navigator.geolocation.getCurrentPosition(function(position){
          // position.coords.latitude from MDN
          var lat = position.coords.latitude;
          var long = position.coords.longitude;

          console.log('latitude ' + lat);
          console.log('longitude ' + long);

          var radius = '25mi';
          // object with parameters from 500px (https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos_search.md#parameters)
          var searchOptions = {
            geo: lat + ',' + long + ',' + radius,
            only: 'Landscapes',
            rpp: 99,
            image_size: 440,
            sort: 'highest_rating'
          };

          _500px.api('/photos/search', searchOptions, function(response){
            // query to see if there are an photos from the users lat + long
            if(response.data.photos.length === 0) {
              console.log('No photos found');
            } else {
              console.log('Request succeeded!');
              console.log(response);

              // loop through results of the response.data.photos array that is returned from 500px
              // create new img element with src attribute and image url
              // get URL
              // append img element to div with class images
              response.data.photos.forEach(function(event){
                var $newImage = $('<img>').attr('src', event.image_url).addClass('image');
                $('.images').append($newImage);
                // event.image_url tests that we get back the array of img urls
                console.log(event.image_url);

              })
            }
          });
        })
      } else {
        $('.images').append('Sorry your bowser does not support geolocation.');
      }


    });
  });
});
