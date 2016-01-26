window.onload = function () {
	'use strict';

	var year = localStorage.year;
	var mandatoryExams = [];
	$.get("http://localhost:3000/mandatory/", function( data ) {
		mandatoryExams = data;
	}).done( function () {
		var currentExams = mandatoryExams[year - 1].exams;
		for(var i = 0; i < currentExams.length; i++) {
			var exam = currentExams[i];
			$("#table-body")
			.append("<tr><td>" + exam.name + "</td><td>" + exam.lector + "</td><td>" + year + "</td></tr>");
		}
	});
}