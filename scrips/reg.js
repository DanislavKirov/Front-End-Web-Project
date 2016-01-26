window.onload = function () {
	'use strict';
	
	var arrAccounts = [];
	$.get("http://localhost:3000/posts/", function( data ) {
		arrAccounts = data;
	});
	
	$("#reg-button").click(function() {
		var firstName = $("#first-name").val();
		var lastName = $("#last-name").val();
		var facNumber = $("#fac-number").val();
		var password = $("#password").val();
		var programmeSelect = $("#programme-select option:selected" ).text();
		var yearSelect = $("#year-select option:selected" ).val();
		
		if(isNameCorrect(firstName) && isNameCorrect(lastName) && isFacNumberCorrect(facNumber)
		&& isPasswordCorrect(password) && isProgrammeCorrect(programmeSelect) && isYearCorrect(yearSelect)) {
			
			var accountExistent = false;
			for(var account = 0; account < arrAccounts.length; account++) {
				if(facNumber == arrAccounts[account].facNumber) {
					accountExistent = true;
				}
			}
			
			if(!accountExistent) {
				var regStudent = new Student(firstName, lastName, facNumber,
									 password, programmeSelect, yearSelect);
									 
				console.log(regStudent);
				$.post("http://localhost:3000/posts/", regStudent, "json")
				.done( function () {
					toLocalStorage(regStudent);
					window.location.href = "Home.html";
					return false;
				});
			} else {
				alert("Съществуващ факултетен номер WEEE!");
			}
		} else {
			alert("Грешно въведени данни вееее!");
		}
	});
};
	