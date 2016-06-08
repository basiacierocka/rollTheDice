/* 
This is simple simulator of rolling dice. Have fun.

*/

var randomNum=[], randomSum, field, domField;

function play() {
	
	var multiCubes = document.querySelector("#cubesNum").value;
	
	randomSum = 0;	
	for (i=0; i<multiCubes; i++) {
		singleDie= (Math.ceil(Math.random()*6));
		randomSum += singleDie;
		randomNum.push(singleDie);
		document.getElementById("score").innerHTML="The sum is " + randomSum;
	}; 
	
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
	document.querySelector("#cubesNum").value = "";	
	document.querySelector("#score").innerHTML= "";
	randomNum = [];
}
	
document.querySelector('#play').addEventListener("click", play); 
document.querySelector('#clear').addEventListener("click",clear);
