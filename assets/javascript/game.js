$(document).ready(function(){
	// variables

	var targetNumber = 0;
	var playerNumber = 0;
	var wins = 0;
	var losses = 0;


	// create random integer generator

	var randomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}

	// generate random values for colored crystals between 1 - 12 and save them as variables
	

	var crystal = ["red", "blue", "yellow", "green"];
	
	function crystalRandomizer() {
		var j = 0;
		for(j = 0 ; j < crystal.length ; j++) {
			crystal[j] = randomInteger(1, 12);
			console.log(crystal[j]);
		
		}
	}

	crystalRandomizer();
	// generate random number between 19 - 120 and save as variable targetNumber

	$("#targetNumber").html(function(){
		targetNumber = randomInteger(19, 120);
		return targetNumber;
	});
	
	function reset() {
		$("#targetNumber").html(function(){
			targetNumber = randomInteger(19, 120);
			return targetNumber;
		});
		$("#playerNumber").html(function(){
			playerNumber = 0;
			return playerNumber;
		});
		crystalRandomizer();
	}

	function checkNumbers() {
		if(playerNumber === targetNumber) {
			wins++;
			$("#wins").html(wins);
			reset();
		}

		if(playerNumber > targetNumber) {
			losses++;
			$("#losses").html(losses);
			reset();
		}
	}
	
	$("#reset").click(function(){
		reset();
	});

	// add the random values to the player's total on button click

	$("#redCrystal").click(function(){
		$("#playerNumber").html(function() {
			playerNumber = playerNumber + crystal[0];
			$("#playerNumber").html(playerNumber);
			console.log(playerNumber);
			checkNumbers();
		});


	});

	$("#blueCrystal").click(function(){
		$("#playerNumber").html(function() {
			playerNumber = playerNumber + crystal[1];
			$("#playerNumber").html(playerNumber);
			console.log(playerNumber);
			checkNumbers();
		});
		

	});

	$("#yellowCrystal").click(function(){
		$("#playerNumber").html(function() {
			playerNumber = playerNumber + crystal[2];
			$("#playerNumber").html(playerNumber);
			console.log(playerNumber);
			checkNumbers();
		});
		

	});

	$("#greenCrystal").click(function(){
		$("#playerNumber").html(function() {
			playerNumber = playerNumber + crystal[3];
			$("#playerNumber").html(playerNumber);
			console.log(playerNumber);
			checkNumbers();
		});
		

	});











}); // /.ready 