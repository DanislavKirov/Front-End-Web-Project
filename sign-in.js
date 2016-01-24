window.onload = function () {
	'use strict';
	
	var arrAccounts = [];
	$.get("http://localhost:3000/posts/", function( data ) {
		data.splice(0,1);
		for(var i = 0; i < data.length; i++) {
			var propArr = Object.keys(data[i]);
			arrAccounts.push(JSON.parse(propArr[0]));
		}
		console.log(arrAccounts);
	}).done( $("#sign-in-button").click( function(){	
		var facNumberInput = $("#fac-number").val();
		var passwordInput = $("#password").val();
		
		console.log(arrAccounts);
		if(isFacNumberCorrect(facNumberInput) && isPasswordCorrect(passwordInput)) {
			for(var i = 0; i < arrAccounts.length; i++) {
				if(arrAccounts[i].facNumber === facNumberInput 
				&& arrAccounts[i].password === passwordInput) {
					var student = toStudent(arrAccounts[i]);
					student.toLocalStorage(i);
					window.location.href = "Home.html";
					return false;
				}
			}
		}
		$("<div class=\"well well-sm\">Wrong faculty number or password!</div>")
			.insertBefore("#sign-in-button");
	})
	);
}