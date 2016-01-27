'use strict';

window.onload = function () {
	$("#reg-button").click( function(){	
		window.location.href = "Registration.html";
		return false;
	});
	
	var arrAccounts = [];
	$.get("http://localhost:3000/posts/", function( data ) {
		arrAccounts = data;
	}).done( $("#sign-in-button").click( function(){	
		var facNumberInput = $("#fac-number").val();
		var passwordInput = $("#password").val();
		
		if(isFacNumberCorrect(facNumberInput) && isPasswordCorrect(passwordInput)) {
			for(var i = 0; i < arrAccounts.length; i++) {
				if(arrAccounts[i].facNumber == facNumberInput 
				&& arrAccounts[i].password == passwordInput) {
					var student = toStudent(arrAccounts[i]);
					toLocalStorage(student);
					window.location.href = "Home.html";
					return false;
				}
			}
		}
		alert("Грешен факултетен номер или парола!");
	})
	);
}