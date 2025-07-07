// Question 1: Variables and Math Expressions

// Write a JavaScript code that declares two variables, x and y, and assigns them the values 10 and 5, respectively. Then, calculate the sum, difference, product, and quotient of x and y and display the results using console.log().
let x =10;
let y =5;
console.log("sum",x+y);
console.log("difference",x-y);
console.log("product",x*y);
console.log("quotient",x/y);

// Question 2: if...else Statements and Comparison Operators

// Write a JavaScript code that prompts the user to enter their age and checks if the age is greater than or equal to 18. If true, display "You are an adult." Otherwise, display "You are a minor."
let age = Number(prompt("Enter your age: "));
if(age >= 18){
    console.log("You are an adult.");   
}else{
    console.log("You are a minor.");
}

// Question 3: Arrays and for Loops

// Write a JavaScript code that declares an array fruits with the elements "Apple", "Banana", and "Cherry". Then, use a for loop to iterate through the array and display each fruit using console.log().
let fruits=["Apple", "Banana", "Cherry"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Question 4: Concatenating Text Strings and Alerts

// Write a JavaScript code that declares two variables, firstName and lastName, and assigns them the values "John" and "Doe", respectively. Then, concatenate the two variables to form a full name and display an alert box with the message "Hello, " followed by the full name.
let firstName = "John";
let lastName = "doe";
alert("Hello" + " " + firstName + " " + lastName);

// Question 5: Nested if Statements and Boolean Logic

// Write a JavaScript code that declares two variables, isAdmin and isLoggedIn, and assigns them the values true and false, respectively. Then, use nested if statements to check if the user is both an admin and logged in. If true, display "Welcome, admin!" using console.log().
let isAdmin = true;
let isLoggedIn = true;
if(isAdmin){
    if(isLoggedIn){
        console.log("Welcome, admin!");
    }
}