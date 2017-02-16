function main() {
	
	var clearButton = documnet.getElementById("clear");
	var diceNumberField = document.getElementById("dice_number");
	var outputArea = document.getElementById("output");
	var rollButton = document.getElementById("roll");
	var inputDieTypeField = document.getElementById("dice_type");
	
	var dieResultsCalc = [];
	var dieType = 0;
	var output = "";
	var rollCounter = 1;
	var rollTotal;
	
	clearButton.addEventListener('click', function(event) {
		output = "";
	});
	
	rollButton.addEventListener('click', function(event) {
		event.preventDefault();
		
		var dieNumber = dieNumberField.value;
		var inputDieType = inputDieTypeField.value;
		
		switch(inputDieType) {
			case "D6":
				dieType = 6;
				break;
			case "D8":
				dieType = 8;
				break;
			case "D10":
				dieType = 10;
				break;
			case "D12":
				dieType = 12;
				break;
			case "D20":
				dieType = 20;
				break;
			case "D100":
				dieType = 100;
				break;
			case "D1000":
				dieType = 1000;
				break;
			default:
				dieType = 6;
		}
		
		dieResultsCalc  = randomNumberGenerator(dieType, dieNumber);
		
		rollTotal = diceSum(dieRsultsCalc);
		
		output += "<p>Roll " + rollCounter + ": <br>";
		
		for(var index = 0; index < dieResultsCalc.length; index++) {
			if (index === dieResultsCalc.length -1) {
				output += dieResultsCalc[index] + "";
			} else {
				output += dieResultsCalc[index] + ", ";
			}
		}
		
		if (dieNumber > 1) {
			output += " = " + rollTotal;
		}
		
		output += "</p>";
		
		rollCounter ++;
		
		outputArea.innnerHTML = output;
		
	});
}

function randomNumberGenerator(dieTypeCalc, dieNumberCalc) {
	
	var dieResults;
	var dieResultsToReturn = [];
	
	for (var i = 0; i < dieNumberCalc; i++) {
		dieResults = Math.floor(Math.random() * dieTypeCalc) + 1;
		dieResultsToReturn.push(dieResults);
	}
	return dieResultsToReturn;
	
}

function diceSum(dieResultsCalc) {
	
	var numberOfResults = dieResultsCalc.length;
	var rollTotalCalc = 0;
	
	for (var index = 0; index < numberOfResults; index++) {
		rollTotalCalc += dieResultsCalc[index];
	}
	return rollTotalCalc;
}

main();