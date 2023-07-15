// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit

// Add buffer between exercises for clarity
console.log("-------------------------------");

// EX 1:
// Overall Improvements: Clean up formatting, add missing semi-colons

// Add parameter to the function
function askForName(name) { 
  console.log("Hello, what is your name?");
  // Add a return to the function so we can get the answer
  return name;
}

// Add console.log and argument to the call so we can see an answer
console.log(askForName("Erica"));

// Add buffer between exercises for clarity
console.log("-------------------------------");

// EX 2:
// Overall Improvements: Clean up formatting, add missing semi-colons

function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

// Add console.log to calls so we can see them
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// Add buffer between exercises for clarity
console.log("-------------------------------");

// EX 3:
// Overall Improvements: Clean up formatting

// Rename 'func' to the required keyword of 'function'
function makeFreshPesto() {
  // Add 'Step #: ' to make recipe easier to read
  console.log("Step 1: Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Step 2: Pulse basil and pine nuts");
  console.log("Step 3: Add garlic and cheeses");
  console.log("Step 4: Slowly pour in oil");
  console.log("Step 5: Season");    
}

makeFreshPesto();

// Add buffer between exercises for clarity
console.log("-------------------------------");

//  EX 4:
// Overall Improvements: Clean up formatting, add missing semi-colons

function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
}

// Call the function a few times in a console.log so we can see the results
console.log(average(1, 2));
console.log(average(3, 3));
console.log(average(12, 21));

// Add buffer between exercises for clarity
console.log("-------------------------------");