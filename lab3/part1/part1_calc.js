var num1 = Number(prompt("Enter first number: "));
var result = 0;
var op;
op = prompt("Enter operator (sum, sub, mul, div, mod): ");
    
var num2 = Number(prompt("Enter second number: "));

        switch (op) {
            case "sum":
                result = num1 + num2;
                alert("Result is: " + result);
                break;
            case "sub":
                result = num1 - num2;
                alert("Result is: " + result);
                break;
            case "mul":
                result = num1 * num2;
                alert("Result is: " + result);
                break;
            case "div":
                result = num1 / num2;
                alert("Result is: " + result);
                break;
            case "mod":
                result = num1 % num2;
                alert("Result is: " + result);
                break;
            default:
                alert("Invalid operator.");
                op = null; 
                break;
        }

