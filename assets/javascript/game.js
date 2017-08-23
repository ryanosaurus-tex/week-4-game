$(document).ready(function(){

	// create random integer generator

	var randomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}

	// generate random number between 19 - 120 and save as variable targetNumber

	var targetNumber = randomInteger(19, 120);
	var playerNumber = 0;
	var wins = 0;
	var losses = 0;

	$("#targetNumber").html(targetNumber);		
	$("#playerNumber").html(playerNumber);
	$("#losses").html(losses);
	$("#wins").html(wins);

	

	// generate random values for colored crystals between 1 - 12 and save them as variables
	
	var crystal = ["red", "blue", "yellow", "green"];
	var j = 0;
	for(j = 0 ; j < crystal.length ; j++) {
		crystal[j] = randomInteger(1, 12);
		console.log(crystal[j]);
	}

	// add the random values to the player's total on button click

	$("#redCrystal").click(function(){
		$("#playerNumber").html(function(i, val) {
			return val*1 + crystal[0]
		});


	});

	$("#blueCrystal").click(function(){
		$("#playerNumber").html(function(i, val) {
			return val*1 + crystal[1]
		});
		

	});

	$("#yellowCrystal").click(function(){
		$("#playerNumber").html(function(i, val) {
			return val*1 + crystal[2]
		});
		

	});

	$("#greenCrystal").click(function(){
		$("#playerNumber").html(function(i, val) {
			return val*1 + crystal[3]
		});
		

	});











}); // /.ready 