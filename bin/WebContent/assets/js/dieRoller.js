function randomNumberGenerator(dieTypeCalc, dieNumberCalc) {
  var dieResults;
  var dieResultsToReturn = [];

  for(var i = 0; i < dieNumberCalc; i++) { 
    dieResults = Math.floor(Math.random() * dieTypeCalc) + 1;
    dieResultsToReturn.push(dieResults);
  }  
  return dieResultsToReturn;
}

function diceSum(dieResultsCalc, dieModValue) {
  var numberOfResults = dieResultsCalc.length;
  var rollTotalCalc = 0;
  
  for (var index = 0; index < numberOfResults; index++) {
    rollTotalCalc += dieResultsCalc[index];
  }

  rollTotalCalc += dieModValue;

  return rollTotalCalc;
}
  
function main() {
  var clearButton = document.getElementById("clear");
  var dieNumberField = document.getElementById("die_number");
  var dieModField = document.getElementById("die_mod");
  var dieResultsCalc = [];
  var dieType = 0;  
  var inputDieTypeField = document.getElementById("die_type");
  var output = "";
  var outputArea = document.getElementById("output");
  var rollButton = document.getElementById("roll");
  var rollCounter = 1;
  var rollTotal;

  clearButton.addEventListener('click', function(event){
    output = "";
  });
  
  rollButton.addEventListener('click', function(event){
    event.preventDefault();    
    
    var dieNumber = dieNumberField.value;
    var inputDieType = inputDieTypeField.value;
    var dieModValue = parseInt(dieModField.value, 10);
    
    if (dieModValue === null) {
    dieModValue = 0;
    } else if (isNaN(dieModValue)) {
    dieModValue = 0;
    }

    switch(inputDieType) {
      case "D2":
    dieType = 2;
    break;
      case "D3":
    dieType = 3;
    break;
      case "D4":
    dieType = 4;
    break;
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
      case "D10000":
    dieType = 10000;
    break;
      default:
        dieType = 6;
    }
    
    dieResultsCalc = randomNumberGenerator(dieType, dieNumber);
    
    rollTotal = diceSum(dieResultsCalc, dieModValue);
    
    output += "<p>Roll " + rollCounter + ": <br>";
    
    output += dieNumber + inputDieType + ": ";
    
    for(var index = 0; index < dieResultsCalc.length; index++) {
      if (index === dieResultsCalc.length -1) {
        output += dieResultsCalc[index] + "";
      } else {
        output += dieResultsCalc[index] + ", ";
      }
    } 
  
    if (dieModValue > 0) {
        output += " </br>Mod: + " + dieModValue;
    } else if (dieModValue < 0) {
        output += " Mod: " + dieModValue;
    }
    
    output += " = " + rollTotal;
    
    output += "</p>";
    
    rollCounter ++;
    
    outputArea.innerHTML = output;
  });
}

main();

