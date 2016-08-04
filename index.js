/*
This is simple simulator of rolling dice. Have fun.
*/
var randomNum=[], diceSum, field, domField;
var rollButton = document.querySelector('.roll_button');
var clearButton = document.querySelector('.clear_button');
var validationMessage = "Please set amount of dice";

function start() {

	var diceAmount = document.querySelector(".diceAmount").value;

	diceSum = 0;
	for (i=0; i<diceAmount; i++) {
		singleRoll = (Math.ceil(Math.random()*6));
		diceSum += singleRoll;
		randomNum.push(singleRoll);
		document.getElementById("score").innerHTML = "The sum is " + diceSum;
	};

	rollButton.setAttribute("class", "hidden");
	clearButton.setAttribute("class", "visible");
	domField = document.createElement("DIV");
	document.body.appendChild(domField);

	for (j=0; j<randomNum.length; j++) {
		field = document.createElement("DIV");
		domField.appendChild(field);
		if (randomNum[j] == 1) {
			field.setAttribute("id","one");
			field.setAttribute("class","dice");
		} else if (randomNum[j] == 2) {
			field.setAttribute("id", "two");
			field.setAttribute("class","dice");
		} else if (randomNum[j] == 3) {
			field.setAttribute("id", "three");
			field.setAttribute("class","dice");
		} else if (randomNum[j] == 4) {
			field.setAttribute("id", "four");
			field.setAttribute("class","dice");
		} else if (randomNum[j] == 5) {
			field.setAttribute("id", "five");
			field.setAttribute("class","dice");
		} else if (randomNum[j] == 6) {
			field.setAttribute("id", "six");
			field.setAttribute("class","dice");
		};
	};
};

function clear() {
	document.body.removeChild(domField);
	document.querySelector(".diceAmount").value = "";
	document.querySelector("#score").innerHTML = "";
	randomNum = [];
	rollButton.setAttribute("class", "visible");
	clearButton.setAttribute("class", "hidden");
}

document.querySelector('.roll_button').addEventListener("click", start);
document.querySelector('.clear_button').addEventListener("click", clear);
