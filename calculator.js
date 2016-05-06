<script>   

	var operatorPressed = false;
	var prevOperand = 0;
	var currentOperand = 0;
	var operationRequested = '';

// Creates calculator display input
	var displayNumbers = document.getElementById("display");  
  
// Clears calculator display and var a values
	function clearMemory()  {
	  displayNumbers.value = '';
	  currentOperand = 0;
	  prevOperand = 0;
	  operationRequested= '';
	  console.log(currentOperand, prevOperand);
	};

	function clearDisplay() {
	  displayNumbers.value = '';
	};

	

// Displays values on calculator screen
	var displayValue = function(num)    {
		if (displayNumbers.value.length > 9)  {
	    	displayNumbers.value = "ERROR";
	  	} else    { 
	    	displayNumbers.value = num;
	    	
	    };

	};

// Handles number button clicks
	function handleNumberClick(num)	{
	  	currentOperand = operatorPressed ? num : displayNumbers.value + num;
	 	operatorPressed = false;
	  	displayValue(currentOperand);
	  	console.log(num);
	  	console.log(prevOperand + 'prevOperand');
		console.log(currentOperand + 'currentOperand');
	};


// Operators function
	function handleOperationClick(operator){
		var result;
	 	operatorPressed = true;
	  	switch(operationRequested){
	    	case 'add':
	      		result = add(prevOperand, currentOperand);
	      		break;
	    	case 'subtract':
	    		result = subtract(prevOperand, currentOperand);
	   			break;
	   		case 'multiplication':
	   			result = multiply(prevOperand, currentOperand);
	   			break;
	   		case 'division':
	   			result = divide(prevOperand, currentOperand);
	   			break;
	   		case 'evaluate':
	   			result = equate();
	   			break;
	    	default:
	     	result= '';
	  	}
	  	if(operationRequested){  //if an acutal computation occurs, we'll store overwrite the result to the prevOperand
	  		displayValue(result);
	    	prevOperand = result;
	    	operationRequested = '';
	  	} else {  //if no computation occurs we'll just set the input val as the prevOperand
	    	prevOperand = currentOperand;
	    	operationRequested = '';
	  	}
	  	operationRequested = operator || operationRequested;
	  	console.log(operationRequested, 'current', currentOperand, 'prev', prevOperand);
	}


// Arithmetic functions
	function add(num, adder){
	  	var sum = parseFloat(num) + parseFloat(adder);
	  	return sum;
	}

	function subtract(num, subtracter)	{
		var difference = parseFloat(num) - parseFloat(subtracter);
		console.log(difference);
		return difference;
	}

	function multiply(num, multiplier)	{
		var product = parseFloat(num) * parseFloat(multiplier);
		return product;
	}

	function divide(num, divisor)	{
		var quotient = parseFloat(num) / parseFloat(divisor);
		return quotient;
	}

	function equate()	{
		return prevOperand;
		//currentOperand = prevOperand;
	}

	</script>