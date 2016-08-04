/*
This is simple simulator of rolling dice. Have fun.
*/
function start() {
	var randomNum=[], diceSum=0, field;
	var domField=document.querySelector('.diceField')
	var rollButton = document.querySelector('.roll_button');

	while (domField.hasChildNodes(field)) {
    domField.removeChild(domField.lastChild);
	}

	var diceAmount = document.querySelector(".diceAmount").value;

	for (i=0; i<diceAmount; i++) {
		singleRoll = (Math.ceil(Math.random()*6));
		diceSum += singleRoll;
		randomNum.push(singleRoll);
		document.getElementById("score").innerHTML = "The sum = " + diceSum;
	};

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

document.querySelector('.roll_button').addEventListener("click", start);
