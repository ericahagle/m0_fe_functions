// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The .includes() method is called on the string "Hello World"
// The argument "Hello" is passed; .includes() checks to see if the string "Hello World" includes the string "Hello"
// The return value is 'true', but nothing will appear in the console
"Hello World".includes("Hello");

// The .endsWith() method is called on the string "Hello World"
// The argument "Hello" is passed; .endsWith() checks to see if the string "Hello World" ends with the string "Hello"
// The return value is 'false', but nothing will appear in the console
"Hello World".endsWith("Hello");

// The .endsWith() method is called on the string "Hello World"
// The argument "rld" is passed; .endsWith() checks to see if the string "Hello World" ends with the string "rld"
// The return value is 'true', but nothing will appear in the console
"Hello World".endsWith("rld");

// Add buffer between exercises for clarity
console.log("-------------------------------");

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// Variable #1
// The .toUpperCase() method is called on the lastName variable, which stores the string object "Fnergelson"
// The .toUpperCase() method returns all characters in the string "Fnergelson" in upper case, resulting in "FNERGELSON"
// The console.log() statement prints the return value of the .toUpperCase() method to the console, which is "FNERGELSON"
var lastName = "Fnergelson";
console.log(lastName.toUpperCase());

// Variable #2
// The .includes() method is called on the nickName variable, which stores the string object "The Fnerg"
// The .includes() method returns true if the data in the nickName variable includes the argument passed in
// In this example, the return value is true, because the string "The Fnerg" does include the string "ner"
// The console.log() statement prints the return value of the .toUpperCase() method to the console, which is 'true'
var nickName = "The Fnerg";
console.log(lastName.includes("ner"));

// Add buffer between exercises for clarity
console.log("-------------------------------");

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// Array #1
var numsArray = [1, 2, 3, 4, 5];

// The .pop() method is called on the numsArray variable, which stores the array [1, 2, 3, 4, 5]
// The .pop() method 'pops' off the last element in the array and returns the value of that element; it also mutates the array
// In this example, the return value is '5', so console.log prings '5'
console.log(numsArray.pop());
// Additionally, if we console.log the variable numsArray again, we'll see that the mutated array now prints as '[ 1, 2, 3, 4 ] because the '5' was 'popped' off in the previous call
console.log(numsArray);


// Array #2
var stringArray = ["first string", "second string", "third string"];

// The .push() method, with the argument "pushed fourth string", is called on the stringArray variable, which currently stores the array ["first string", "second string", "third string"]
// The .push() method 'pushes' the passed argument ("pushed fourth string") onto the end of the array and returns the index value of that element; it also mutates the array
// In this example, the index of the newly added element is 4, so console.log prings '4'
console.log(stringArray.push("pushed fourth string"));
// Additionally, if we console.log the variable stringArray again, we'll see that the mutated array now prints as '[ "first string", "second string", "third string", "pushed fourth string" ] because the element "pushed fourth string" was 'pushed' in the previous call
console.log(stringArray);