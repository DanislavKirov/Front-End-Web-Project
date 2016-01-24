window.onload = function () {
	'use strict';
		
	var arrAccounts = getFromServer();
	
	$("#reg-button").click(function() {
		
		var firstName = $("#first-name").val();
		var lastName = $("#last-name").val();
		var facNumber = $("#fac-number").val();
		var password = $("#password").val();
		var programmeSelect = $("#programme-select option:selected" ).text();
		var yearSelect = $("#year-select option:selected" ).text();
		
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

				var studentJSON = JSON.stringify(regStudent).trim();
				
				postToServer(studentJSON);
				
				localStorage.id = i + 1;
				window.location.href = "Home.html";
				return false;
			} else {
				alert("Existing faculty number! Please enter again:");
			}
		} else {
			console.log("failure");
		}
	});
	
};
	