// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return "Hello there, friend!";
}

var generalGreeting = greeting();
console.log(greeting());

// Add buffer between exercises for clarity
console.log("-------------------------------");

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `Hello there, ${name}!`;
}

var namedGreeting = customGreeting("Jon");
console.log(namedGreeting);

// Add buffer between exercises for clarity
console.log("-------------------------------");

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    return `Hello there, ${firstName} ${middleName} ${lastName}!`;
}

var fullNameGreeting = greetPerson("Jon", "Jacob", "Jingleheimershmidt");
console.log(fullNameGreeting);

// Add buffer between exercises for clarity
console.log("-------------------------------");

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    return Math.pow(num, 2);
}

var squaredNumber = square(10);
console.log(squaredNumber);
console.log(`The result is: ${squaredNumber}.`);

// Add buffer between exercises for clarity
console.log("-------------------------------");

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if (quantity === 4) {
        var status = "is stocked";
    } else if (quantity === 0) {
        status = "- OUT of stock!";
    } else {
        status = "- running LOW"
    }
    return console.log(`${item} ${status}`);
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"