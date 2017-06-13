"use strict";

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'],
	startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

function generateMadlib (startupX, startupY) {
	var random1 = Math.floor((Math.random() * startupX.length)),
	 	random2 = Math.floor((Math.random() * startupY.length));

	return 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]
}

$(document).ready(function () {
	var favorites = [],
		currentPhrase = '';

	$('#create').on('click', function () {
		currentPhrase = generateMadlib(startupX, startupY);

		$('#xForY').text(currentPhrase);
	});

	$('#save').on('click', function () {
		if ((currentPhrase === '') 
			|| (favorites.indexOf(currentPhrase) !== -1)) return;

		favorites.push(currentPhrase);
	});

	$('#print').on('click', function () {
		$('#favorites').html(favorites.join('<br>'));
	});
});

// var app = {
//     currentMadLib: '',
//     favorites: [],

//     startupX: ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'],
//     startupY: ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'],

//     selectors: {
//         title: '#xForY',
//         createButton: '#create',
//         saveFavoriteButton: '#save',
//         printFavoriteButton: '#print',
//         favoritesPanel: '#favorites'
//     },

//     events: {
//         click: 'clickHandler'
//     },

//     init: function () {
//         this.fetchDom();
//         this.attachEvents();
//     },

//     fetchDom: function () {
//         this.$body = $('body');
//         this.$title = $(this.selectors.title);
//         this.$favorites = $(this.selectors.favoritesPanel);
//     },

//     attachEvents: function () {
//         Object.keys(this.events).forEach((type) => {
//             var handlerName = this.events[type];
//             this.$body.on(type, this[handlerName].bind(this));
//         });
//     },

//     clickHandler: function (e) {
//         var $target = $(e.target),
//             s = this.selectors;

//         if ($target.is(s.createButton)) this.updateMadLib();
//         else if ($target.is(s.saveFavoriteButton)) this.saveFavorite();
//         else if ($target.is(s.printFavoriteButton)) this.printFavorites();
//     },

//     generateMadlib: function () {
//         var random1 = Math.floor((Math.random() * this.startupX.length)),
//             random2 = Math.floor((Math.random() * this.startupY.length));

//         return 'A startup that is ' + this.startupX[random1] + ', but for ' + this.startupY[random2]
//     },

//     updateMadLib: function () {
//         this.currentMadLib = this.generateMadlib();

//         this.$title.text(this.currentMadLib);
//     },

//     saveFavorite: function () {
//         if ((this.currentMadLib === '') 
//             || (this.favorites.indexOf(this.currentMadLib) !== -1)) return;

//         this.favorites.push(this.currentMadLib);
//     },

//     printFavorites: function () {
//         this.$favorites.html(this.favorites.join('<br>'));
//     }
// };

// $(() => app.init());