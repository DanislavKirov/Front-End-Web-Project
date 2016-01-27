'use strict';

window.onload = function () {
	var student = getFromLocalStorage();
	
	$("<h2>" + student.firstName + " " + student.lastName + "</h2>")
	.insertAfter(".welcome");
	$("<p>" + student.facNumber + "</p>")
	.insertAfter("#home-fac-number-label");
	$("<p>" + student.programme + "</p>")
	.insertAfter("#home-degree-label");
	$("<p>" + student.year + "</p>")
	.insertAfter("#home-year-label");
	
	$("#exit").click( function() {
		removeStorage();
	});
}