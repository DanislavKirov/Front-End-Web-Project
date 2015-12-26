
var isNameCorrect = function(str) {
	var size = str.length;
	var regEx = /[A-Z]/gi;
	return size >= 6 && size == str.match(regEx).length;
}

var isFacNumberCorrect = function(str) {
	var regEx = /[0-9]/g;
	return str.length == 5 && str.match(regEx).length == 5;
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

var end = function () {
	console.log("END");
}

window.onload = function () {
	'use strict';
		
	console.log("Loaded");
	
	$("#reg-button").click( function() {
		
		var firstName = $("#first-name").val();
		var lastName = $("#last-name").val();
		var facNumber = $("#fac-number").val();
		var password = $("#password").val();
		var programmeSelect = $("#programme-select option:selected" ).text();
		var yearSelect = $("#year-select option:selected" ).text();
		
		if(isNameCorrect(firstName) && isNameCorrect(lastName) && isFacNumberCorrect(facNumber)
		&& isPasswordCorrect(password) && isProgrammeCorrect(programmeSelect) && isYearCorrect(yearSelect)) {
			var regStudent = {
				"first-name" : firstName,
				"last-name" : lastName,
				"fac-number" : facNumber,
				"password" : password,
				"programme-select" : programmeSelect,
				"year-select" : yearSelect
			};
			
			var studentJSON = JSON.stringify(regStudent).trim();
			console.log(studentJSON);
			
			//setTimeout(success, 100000);
			
			$.post("http://localhost:3000/posts/", studentJSON, function () {
				console.log("JSON Sent");
			} , "JSON");
		}
	});
};
	