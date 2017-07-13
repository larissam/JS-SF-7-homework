/*
  Katja Hofmann
  GA-SF-7
*/


    $('#search-button').click(function(){
       getResults($('#origin').val(), $('#price').val());
    });


function getResults(origin, maxfare) {

$.ajax()

    // Hardcoded session id, change this later
    sessionToken = "T1RLAQJy52NG1Z1k0hzjTFrzjMV7YgJIDhAk9m/wllENcAFHfF9D9XA/AADAaX7JFA2T9dAl/vx7V1HJkEpsmb/j+AtLmwbI2Lg6zYGFOa1IapEoc/J9aM3uTs6JIzO96owaF20RDg4TiWKDJ3GJrvMESRayWCuLCOzKks65h3pMIbwFD5szcQS4rBxIJ3JUwnlXgKRarkLKWKbnGz9BNDLKZloQbLRobGR/ewcx3BiSuHtmht3Rzbu9Ro2x4paMVrvjsav9mGZZ2GgBfR9Si8yPqN3cbYC4tJizzJ1su8J0PxnCj8duvXGJzLzh"

$.ajax({
    url: "https://api.test.sabre.com/v2/shop/flights/fares",
    method: "GET",
    data: {
        origin: origin,
        lengthofstay: "1,2,3,4,5",
        maxfare: maxfare,
        pointofsalecountry: "US",
        earliestdeparturedate: "2017-07-15",
        latestdeparturedate: "2017-07-25"
    },
    headers: {
        Authorization: "Bearer " + sessionToken

    },
       success: function (response) {
           for (var i = 0; i<= response.FareInfo.length; i++) {
               fareInfo = response.FareInfo[i];
               var $addResult = $('<div id="resultItem">');
               $addResult.html("You can go to " + fareInfo.DestinationLocation + " for " + fareInfo.LowestFare.Fare + 
               " dollars on " + moment(fareInfo.DepartureDateTime).format("LL") + " " + '<input type="checkbox" id="checkbox" value="select">' + '<label for="select">  Compare temp!</label>');
               $('#results').append($addResult);
               console.log($('#results'));
        
        }
       },

       error: function (response, errorString, actualError) {
           console.log(response.responseJSON);
           console.error(actualError);
           console.error(errorString);
       }
  })
}





