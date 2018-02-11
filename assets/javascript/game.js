// List of variables and explanations

// array for values to be randomly assigned
var values = [];
// variable to count up to goal amount
var counter = 0;
// pick random number between 1 and 120 
var goalNumber = 0;

// wins variable
var wins = 0;
// losses variable
var losses = 0;

// allows us to have unique value sets
var noDups = false;

//For loop to fill the array
function reset() {
	// pick numbers
uniqueValues();
	// set the goalNumber
	goalNumber = Math.round((Math.random() * 120) + 30);
	// update the html to reflect the values
	counter = 0;
	$("#goalScore").html("<strong>POINT GOAL</strong>:     " + goalNumber);
	$("#currentScore").html("<strong>CURRENT SCORE</strong>:     " + counter);
	console.log(values, goalNumber);
};

// run Reset on load
reset();

// OnClick events 
$("#crystalOne").click(function () {
	counter = counter + values[0];
	checkWin();
});

$("#crystalTwo").click(function () {
	counter = counter + values[1];
	checkWin();
});

$("#crystalThree").click(function () {
	counter = counter + values[2];
	checkWin();
});

$("#crystalFour").click(function () {
	counter = counter + values[3];
	checkWin();
});

// run the lose/win options or leave it be
function checkWin() {
	$("#currentScore").html("<strong>CURRENT SCORE:</strong>" + counter);
	console.log(counter);
	if (counter === goalNumber) {
		wins++;
		alert("You won!");
		reset();
		$("#winsTracker").html("Wins: " + wins)
	} else if (counter > goalNumber) {
		losses++;
		alert("You Lost!  Try again!");
		$("#lossTracker").html("Losses: " + losses)
		reset();
	} else { };

};

function uniqueValues() {
do {
	newValues();
	checkValues();
}
while (noDups === false)};

// for loop to set the values
function newValues(){
values = [];
for (var i = 0, t = 14; i < 4; i++) {
	values.push(Math.round(Math.random() * t) + (i + 1));
}
};


function checkValues() {

if (	// if values at 0 are equal to 1 2 or 3
values[0] === values[1] || values[0] === values[2] || values[0] === values[3] 
	// if values at 1 are equal to 2 or 3
	||	values[1] === values[2] || values[1] === values[3]  
	// or if values at 2 are equal to 3
	|| values[2] === values[3]) {
console.log("THere are duplicates, let's go again");
uniqueValues();
	}
	else { noDups = true;}
};

