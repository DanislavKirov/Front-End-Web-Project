window.onload = function () {
  'use strict';

  var firstName = document.getElementById('first-name');
  var lastName = document.getElementById('last-name');
  var facNumber = document.getElementById('fac-number');
  var password = document.getElementById('password');
  var programmeSelect = document.getElementById('programme-select');
  var yearSelect = document.getElementById('year-select');
  
  $("#reg-button").click(function(){ {
	  
	var data = null;
	$.post( "test.json", data )
	  .done(function( data ) {
			alert( "Data Loaded: " + data );
		
	});
	