/*In JavaScript, a closure is created when a function is defined inside another function,
 allowing the inner function to access the variables and parameters of the outer (enclosing) function. 
 This access is possible even after the outer function has finished executing. 
 The lexical environment refers to the scope in which a variable is declared and the set of variables that are accessible in that scope.*/

 function outerFunction(x) {
    // outerFunction's lexical environment includes the parameter x
  
    function innerFunction(y) {
      // innerFunction's lexical environment includes parameters y and the outerFunction's variable x
      return x + y;
    }
  
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction with an argument
  const closure = outerFunction(10);
  
  // Now, the closure still has access to the variable x from outerFunction
  const result = closure(5);
  console.log(result); // Output: 15




/*In this example, outerFunction takes a parameter x and defines an inner function innerFunction that takes a parameter y.
 innerFunction has access to the variable x from its enclosing scope, even after outerFunction has completed execution.
  When we invoke outerFunction(10), it returns the innerFunction, creating a closure. 
  Later, when we call the closure (closure(5)), it still has access to the x value from the outer scope, and the result is 15.

This demonstrates the concept of closures and how they capture and "remember" the lexical environment in which they were created.*/
  