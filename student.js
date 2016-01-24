function Student(firstName, lastName, facNumber, 
				password, programme, year) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.facNumber = facNumber;
	this.password = password;
	this.programme = programme;
	this.year = year;
	
	this.passed = [];
	this.current = [];
	this.relegated = [];
}

Student.prototype.addPassed = function (exam) {
	passed.push(exam);
}

Student.prototype.addCurrent = function (exam) {
	current.push(exam);
}

Student.prototype.addRelegated = function (exam) {
	relegated.push(exam);
}

Student.prototype.toLocalStorage = function (studentId) {
	localStorage.id = studentId;
	localStorage.firstName = this.firstName;
	localStorage.lastName = this.lastName;
	localStorage.facNumber = this.facNumber;
	localStorage.password = this.password;
	localStorage.programme = this.programme;
	localStorage.year = this.year;
}
 
var removeStorage = function () {
	localStorage.removeItem("id");
	localStorage.removeItem("firstName");
	localStorage.removeItem("lastName");
	localStorage.removeItem("facNumber");
	localStorage.removeItem("password");
	localStorage.removeItem("programme");
	localStorage.removeItem("year");
}

var getFromLocalStorage = function() {
	return new Student(localStorage.firstName, localStorage.lastName, localStorage.facNumber, 
				localStorage.password, localStorage.programme, localStorage.year) ;
}

var toStudent = function (obj) {
	return new Student(obj.firstName, obj.lastName, obj.facNumber, 
				obj.password, obj.programme, obj.year) ;
}
