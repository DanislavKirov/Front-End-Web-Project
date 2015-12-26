window.onload = function () {
	'use strict';
	
	var arrAcounts = [];
	
	$.get("http://localhost:3000/posts//test.html", function( data ) {
		arrAcounts = JSON.parse(data);
		alert( "Load was performed." );
	});
	
	$("#log-in-button").click( function () {
		var facNumber = $("fac-number").val();
		var password = $("password").val();
		
		if(isFacNumberCorrect(facNumber) && isPasswordCorrect(password))
		{
			for(int i = 0; i < arrAcounts.length; ++i)
			{
				if(arrAcounts[i])
					// to be continued...
			}
		}
	});
	
}