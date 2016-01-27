'use strict';

function Student(firstName, lastName, facNumber, 
				password, programme, year) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.facNumber = facNumber;
	this.password = password;
	this.programme = programme;
	this.year = year;
}

var toLocalStorage = function (obj) {
	localStorage.firstName = obj.firstName;
	localStorage.lastName = obj.lastName;
	localStorage.facNumber = obj.facNumber;
	localStorage.password = obj.password;
	localStorage.programme = obj.programme;
	localStorage.year = obj.year;
}
 
var removeStorage = function () {
	localStorage.removeItem("firstName");
	localStorage.removeItem("lastName");
	localStorage.removeItem("facNumber");
	localStorage.removeItem("password");
	localStorage.removeItem("programme");
	localStorage.removeItem("year");
}

var getFromLocalStorage = function() {
	return new Student(localStorage.firstName, localStorage.lastName, localStorage.facNumber, 
				localStorage.password, localStorage.programme, localStorage.year);
}

var toStudent = function (obj) {
	return new Student(obj.firstName, obj.lastName, obj.facNumber, 
				obj.password, obj.programme, obj.year);
}
