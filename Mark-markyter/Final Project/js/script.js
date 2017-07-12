
/* Global Variables */

var fontSrc = 'https://www.googleapis.com/webfonts/v1/webfonts?fields=items(category%2Cfamily%2Ckind)&key=AIzaSyCUz0Df44iRfGEBsIl_VXQO8gDEsoVjkKY'
var fontObj = [];

/* document ready block for event listeners */

$(document).ready( function() {

	/* Submission listener */

	$('#submit-content').on('click', function() {
	    var html = $('.html-input').val();
	    var css = $('.css-input').val();
	    $('.output').html(html);
	    $( '<style>' + css + '</style>' ).appendTo( 'head' );

	    /* Detect all html tag types */

	  	var elements = $(html);
		var found = $('p', elements);
		
		$('.font-selection-container').empty(); // Reset dom

		for (var i = found.prevObject.length - 1; i >= 0; i--) {
			var element = found.prevObject[i].localName;
			console.log(element);
			if (element) { 	// Use only truthy values, i.e. non-text 
				$('.font-selection-container').append('<h1>&lt;' + element + '&gt;</h1>' + '<select class="' + element + '"></select>');
				for (var j = fontObj.length - 1; j >= 0; j--) {
					$('.' + element).append($('<option></option>').attr('value', fontObj[j].category).text(fontObj[j].family)); // Build option list of fonts for each detected element select
				}
			}

			// Note: unsolved failure case: Starting with any random text string (i.e. lsjaldkfj) instead of an html tag (<span>) 
		}

	});

	/* Font Selection lisener */

	$('.font-selection-container').on('change', 'select', function() { // Discovered I had to select a static div in order to listen to a a change on a dynamically-generated element
		
		var family = this.value;
		var font = $(this).find('option:selected', this);
		var fontName = font[0].innerHTML;
		var fontConcat = fontName.split(' ').join('+');
		$('head').append('<link href="https://fonts.googleapis.com/css?family=' + fontConcat + '" rel="stylesheet" />');
		var styleSheet = document.styleSheets[1];
		var target = $(this).attr('class');
		var insertedStyle = "'" + fontName + "', " + family; // build CSS rule
		$(target).css("font-family", insertedStyle); // apply CSS 

	});

	/* 'Toggle' functionality */

    $(document).on('click', '.toggle', function() {
    $(this).nextAll('div').toggle('slide');
    $(this).toggleClass('expanded');
    });

}); // end of doc ready block


var getData = function(src) {
	
	// $('#popUp').toggleClass('hidden');
	
	$.ajax({
	    url: src,
	    data: {
	        format: "json"
	    },
	    success: function (response) {
	       console.log(response);
	        // $('#popUp').toggleClass('hidden');
	        fontObj = response.items;
	    }
	})
}


getData(fontSrc);  // Initial AJAX call, setting fontObj = font list


