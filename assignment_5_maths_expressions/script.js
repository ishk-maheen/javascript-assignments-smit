// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let a = 3;
let b = 5;
let sum = a + b;
document.writeln("Sum of ", a , " and " , b , " is " , sum , "<br><br>");


// 2. Repeat task1 for subtraction, multiplication, division & modulus.
let difference = a - b;
let product = a * b;
let division = a / b;
let modulus = a % b;
document.writeln("Difference of ", a , " and " , b , " is " , difference , "<br>");
document.writeln("Product of ", a , " and " , b , " is " , product , "<br>");
document.writeln("Division of ", a , " and " , b , " is " , division , "<br>");
document.writeln("Modulus of ", a , " and " , b , " is " , modulus , "<br><br>");


// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
let num;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.writeln("Value after variable declaration is ", num , "<br>");

// c. Initialize the variable with some number.
num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.writeln("Initial value: ",num,"<br>");

// e. Increment the variable.
num++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.writeln("Value after increment is: ",num,"<br>");

// g. Add 7 to the variable.
num+=7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.writeln("Value after addition is: ",num,"<br>");

// i. Decrement the variable.
num--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.writeln("Value after decrement is: ",num,"<br>");

// k. Show the remainder after dividing the variable’s value by 3.
document.writeln("The remainder is: ",num % 3,"<br><br>");

// l. Output : “The remainder is : 0”.


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
let ticket_price = 600;
let tickets = 5;
document.writeln("Total cost to buy ",tickets," tickets to a movie is ",ticket_price*tickets, "PKR","<br><br>")


// 5. Write a script to display multiplication table of any number in your browser. E.g
let tableNumber = 4;
document.writeln("Table of ", tableNumber,"<br>");
document.writeln(tableNumber ," X 1 = ", tableNumber*1,"<br>");
document.writeln(tableNumber ," X 2 = ", tableNumber*2,"<br>");
document.writeln(tableNumber ," X 3 = ", tableNumber*3,"<br>");
document.writeln(tableNumber ," X 4 = ", tableNumber*4,"<br>");
document.writeln(tableNumber ," X 5 = ", tableNumber*5,"<br>");
document.writeln(tableNumber ," X 6 = ", tableNumber*6,"<br>");
document.writeln(tableNumber ," X 7 = ", tableNumber*7,"<br>");
document.writeln(tableNumber ," X 8 = ", tableNumber*8,"<br>");
document.writeln(tableNumber ," X 9 = ", tableNumber*9,"<br>");
document.writeln(tableNumber ," X 10 = ", tableNumber*10,"<br><br>");


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// Conversion Formulae:
// C=(F-32)*5/9
// F=(C*9/5)+32

// a. Store a Celsius temperature into a variable.
let celsius_temperature = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
document.writeln(celsius_temperature,"°C is ",(celsius_temperature*9/5)+32,"°F","<br>");

// c. Now store a Fahrenheit temperature into a variable.
let fahrenheit_temperature = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
document.writeln(fahrenheit_temperature,"°F is ",(fahrenheit_temperature-32)*5/9,"°C","<br>");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

let item1 = 650;
let quantity_item1= 3;
let item2 = 100;
let quantity_item2= 7;
let shipping_charges = 100;
document.writeln("<h1>Shopping Cart</h1> <br>");
document.writeln("Price of item 1 is ",item1,"<br>");
document.writeln("Quantity of item 1 is ",quantity_item1,"<br>");
document.writeln("Price of item 2 is ",item2,"<br>");
document.writeln("Quantity of item 2 is ",quantity_item2,"<br>");
document.writeln("Shipping Charges ",shipping_charges,"<br>");
document.writeln("Total cost of our order is ",item1*quantity_item1+item2*quantity_item2+shipping_charges,"<br><br>");


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
let total_marks = 980;
let obtained_marks = 804;
document.writeln("<h1>Marks Sheet</h1> <br>");
document.writeln("Total marks: ",total_marks,"<br>");
document.writeln("Marks obtained: ", obtained_marks,"<br>");
document.writeln("Percentage: ", obtained_marks/total_marks*100,"%<br><br>")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
let US_Dollar = 104.80;
let Saudi_Riyal = 28;
document.writeln("<h1>Currency in PKR</h1> <br>");
document.writeln("Total currency in PKR: ",US_Dollar*10 + Saudi_Riyal*25,"<br><br>")


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let expression = 3 + 5 * 10 / 2;


// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
let current_year = 2025;
let birth_year = 2005;
let age = current_year-birth_year;
document.writeln("<h1>Age Calculator</h1> <br>");
document.writeln("Current Year: ",current_year,"<br>")
document.writeln("Birth Year: ",birth_year,"<br>")
document.writeln("Your Age is: ",age,"<br><br>")


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
let r = 20;
let pi = 3.142;
let circunference = 2*pi*r;
let area = pi*r**2
document.writeln("<h1>The Geometrizer</h1> <br>");
document.writeln("Radius of a circle: ",r,"<br>");
document.writeln("The circumference is ",circunference,"<br>");
document.writeln("The area is ",area,"<br><br>")


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
let favorite_snack = "Chocolate chip";
let current_age = 15;
let maximum_age = 65;
let snaks_per_day = 3;
let total = (maximum_age-current_age)*snaks_per_day;
document.writeln("<h1>The Lifetime Supply Calculator</h1> <br>");
document.writeln("Favorite Snacks: ",favorite_snack,"<br>");
document.writeln("Current Age: ",current_age,"<br>");
document.writeln("Estimated Maximum Age: ",maximum_age,"<br>");
document.writeln("Amount of snacks per day: ",snaks_per_day,"<br>");
document.writeln("You will need ",total, " to last you until the ripe old age of ",maximum_age,"<br><br>")