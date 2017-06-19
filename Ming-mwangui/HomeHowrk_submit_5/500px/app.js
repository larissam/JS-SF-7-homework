$(document).ready(function () {
    _500px.init({
        sdk_key: 'your key here'
    });
    $('#login').click(function () {
        _500px.login(); //  == jquery $.get , login as the tocken
        _500px.on('authorization_obtained', function () {
            console.log('authorization_obtained');
            $('.sign-in-view').hide();
            $('.image-results-view').show();

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;

                    var radius = '25mi';
                    var searchOptions = {
                        geo: lat + ',' + long + ',' + radius,
                        only: 'Landscapes',
                        sort: 'highest_rating',
                        rpp: 28,
                        image_size: 200
                        //geo — A geo-location point of the format latitude,longitude,radius<units>. Acceptable units are km or mi.
                    };
                    _500px.api('/photos/search', searchOptions, function (response) {
                        var $box = $('<div id="box">');
                        if (response.data.photos.length === 0) {
                            console.log('No photos found.');
                        } else {
                            for(i = 0; i < response.data.photos.length; i++ ) {
                                $('.images').append($('<div class="box">')
                                    .append($('<img>').attr('src',response.data.photos[i].image_url).addClass('image'))
                                        .append($('<span class="detail title">').text('Title: '+response.data.photos[i].name))
                                        .append($('<span class="detail">').text('Author: '+ response.data.photos[i].user.fullname))
                                        .append($('<span class="detail description">').text('Description: '+ response.data.photos[i].description))
                                        .append($('<div class="detail rating">').text('Rating: '+ response.data.photos[i].highest_rating))
                                    );
                            }
                        }
                    })
                })
            } else {
                $('.images').append('Sorry your browser does not support geolocation');
            }

        })
    })
});

