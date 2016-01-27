'use strict';

var isNameCorrect = function(str) {
	var size = str.length;
	var regEx = /[A-Z]/gi;
	var match = str.match(regEx);
	return size >= 2 && match != null && size == match.length;
}

var isFacNumberCorrect = function(str) {
	var regEx = /[0-9]/g;
	var match = str.match(regEx);
	return str.length == 5 && match != null && match.length == 5;
}
	
var isPasswordCorrect = function(str) {
	return str !== '' && str.length >= 6;
}

var isProgrammeCorrect = function(str) {
	return str !== '' && str !== 'Специалност';
}

var isYearCorrect = function(str) {
	return str !== '' && str !== 'Курс';
}
