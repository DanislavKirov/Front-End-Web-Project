'use strict';

window.onload = function () {
	var electiives = [];
	$.get("http://localhost:3000/electives", function( data ) {
		electiives = data;
	}).done ( function () {
		for(var i = 0; i < electiives.length; i++) {
			$("#select-elective").append("<option>" + electiives[i] + "</option>");
		}
	});
	
	$("#exit").click( function() {
		removeStorage();
	});
}