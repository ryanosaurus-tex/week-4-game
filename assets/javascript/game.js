$(document).ready(function(){

	// create random integer generator

	var randomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}

	// generate random number between 19 - 120 and save as variable targetNumber

	var targetNumber = randomInteger(19, 120);

	// attach targetNumber to div with same id

	$("#targetNumber").html(targetNumber);

	

	// attach playerNumber to div id with same name

	$("#playerNumber").html(playerNumber);

	// generate random values for colored crystals between 1 - 12 and save them as variables
	
	var crystal = ["red", "blue", "yellow", "green"];
	var i = 0;
	for(i = 0 ; i < crystal.length ; i++) {
		crystal[i] = randomInteger(1, 12);
		console.log(crystal[i]);
	}

	// create a variable to store players current number

	var playerNumber = 0;

	// add the random values to the players total on button click

	$("#redCrystal").click(function(){
		playerNumber = Number(crystal[0]) + Number($(this).html());
		$("#playerNumber").html(playerNumber);
	});






	








}); // /.ready 