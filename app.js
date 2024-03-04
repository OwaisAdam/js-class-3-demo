//chapter 9

//Q1

var cityName = prompt("Enter the city name:");

if (cityName.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights");
}

//Q2

var gender = prompt("your Gender");
if (gender === "male") {
  alert("wellcome sir");
} else if (gender === "female") {
  alert("wellcome maam");
} else {
  alert("wellcome");
}

//Q3

var signalColor = prompt(
  "Enter the color of the road traffic signal (Red, Yellow, or Green):"
);

switch (signalColor) {
  case "red":
    alert("Must Stop");
    break;
  case "yellow":
    alert("Ready to move");
    break;
  case "green":
    alert("Move now");
    break;
}

//Q4

var remaning_fuel = prompt("Enter remaning fuel in car");

if (remaning_fuel > 0.25 || remaning_fuel === 0.25) {
  alert("“Please refill the fuel in your car”");
} else {
  alert("fuel is okay");
}

//Q5

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

//Q6

var subject1 = parseInt(
  prompt("Enter marks obtained from 100 marks in english :")
);
var subject2 = parseInt(prompt("Enter marks obtained from 100 marks in urdu:"));
var subject3 = parseInt(
  prompt("Enter marks obtained from 100 marks in islamiat:")
);

var totalMarks = 300;

var totalObtainedMarks = subject1 + subject2 + subject3;

var percentage = (totalObtainedMarks / totalMarks) * 100;

var grade;
if (percentage >= 80) {
  grade = "A+";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else if (percentage >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}

document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: ");

if (grade === "Fail") {
  document.write("Sorry, you have failed.");
} else {
  document.write("Congratulations!");
}
document.write("</p>");

//Q7

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
  alert("Close enough to the correct answer");
} else {
  alert("Sorry, incorrect guess. The correct number was " + secretNumber);
}

//Q8

var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
  alert(number + " is divisible by 3.");
} else {
  alert(number + " is not divisible by 3.");
}

//Q9

var number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
  alert(number + " is an even number.");
} else {
  alert(number + " is an odd number.");
}

//Q10

var T = +prompt("what is the temperature");

if (T === 40) {
  alert("“It is too hot outside.”");
} else if (T === 30) {
  alert("“The Weather today is Normal.”");
} else if (T === 20) {
  alert("“Today’s Weather is cool.”");
} else if (T === 10) {
  alert("“OMG! Today’s weather is so Cool.”");
} else {
  alert("invilad number");
}

//Q11

// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation (+, -, *, /, %)
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Variable to store the result of the calculation
var result;

// Perform the calculation based on the operation
if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  // Handle invalid operation input
  result = "Invalid operation";
}

alert("Result: " + result);

//Q12

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//Q13

var your_pass = "Hassan123";
var password = prompt("Enter your password");

if (your_pass == password) {
  alert("correct!");
} else if (your_pass !== password) {
  alert("“Incorrect password”");
} else if (password == "") {
  alert("please enter your password");
}

//Q14

var firstInteger = parseInt(prompt("Enter the first integer:"));

var secondInteger = parseInt(prompt("Enter the second integer:"));

// Check if the first integer is greater than the second integer
if (firstInteger > secondInteger) {
  alert("The larger integer is: " + firstInteger);
} else if (secondInteger > firstInteger) {
  alert("The larger integer is: " + secondInteger);
} else {
  // If both integers are equal
  alert("Both integers are equal: " + firstInteger);
}
// ///////////////////////////////



// chp 9-10
// Q1
city = prompt("enter city name : ");
if ((city = "karachi")) {
  document.write("Welcome to city of lights");
}

// Q2
gender = prompt("gender :");

if (gender == "male") {
  document.write("Good Morning Sir");
} else if (gender == "female") {
  document.write("Good Morning Ma'am");
} else {
  document.write("none");
}

// Q3
color = prompt("color of traffic signal:");

if (color == "red") {
  document.write("Must Stop");
} else if (color == "yellow") {
  document.write("Ready to move");
} else if (color == "green") {
  document.write("Move now");
} else {
  document.write("none");
}

// Q4
fuel = prompt("fuel in car");
if (fuel <= 0.25) {
  document.write("Please refill the fuel in your car");
} else {
  document.write("no need to refill");
}

// Q5
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Q6
maths = parseInt(prompt("enter maths marks"));
english = parseInt(prompt("enter english marks"));
urdu = parseInt(prompt("enter urdu marks"));
obtain = urdu + english + maths;
total = 300;
percentage = (obtain / total) * 100;
document.write("<h1>Marks Sheet</h1> <br>");
document.write("Total marks : " + total);
document.write("<br> obtain marks : " + obtain);
document.write("<br>percentage : " + percentage + "<br>");

if (percentage >= 80) {
  document.write("Grade : A-one <br>" + "Remarks : Excellent");
} else if (percentage >= 70) {
  document.write("Grade : A <br>" + "Remarks : Good");
} else if (percentage >= 60) {
  document.write("Grade : B <br>" + "Remarks : You need to improve");
} else if (percentage < 60) {
  document.write("Grade : Fail <br>" + "Remarks : Sorry");
}

// Q7
var secretNumber = 7;
guess = prompt("Guess the secret number");
if (guess == secretNumber) {
  document.write("Bingo! Correct answer");
} else if (guess == ++secretNumber) {
  document.write("Close enough to correct answer");
}

// Q8
num = prompt("enter number");
if (num / 3 == 0) {
  document.write("this number is divisible by 3");
} else {
  document.write("this number is not divisible by 3");
}

// Q9
number = parseInt(prompt("enter number"));
if (number % 2 == 0) {
  document.write("this is even number");
} else {
  document.write("this is odd number");
}

// Q10
var temp = parseInt(prompt("Enter temperature"));
if (temp >= 40) {
  document.write("It is too hot outside");
} else if (temp >= 30) {
  document.write("The weather today is normal");
} else if (temp >= 20) {
  document.write("Today Weather's is so cool");
} else if (temp >= 10) {
  document.write("OMG! Today's weather is so Cool.");
} else {
  document.write("Its to cold outside");
}

// Q11
num1 = parseInt(prompt("enter first number"));
operation = prompt("enter operation");
num2 = parseInt(prompt("enter second number"));
if (operation == "+") {
  document.write(num1 + num2);
} else if (operation == "-") {
  document.write(num1 - num2);
} else if (operation == "*") {
  document.write(num1 * num2);
} else if (operation == "/") {
  document.write(num1 / num2);
} else if (operation == "%") {
  document.write(num1 % num2);
}

// chap 10-14

// chap 10  (if statements)

// Q1
var city = prompt("enter city name");
if ((city = "karachi")) {
  console.log("The city of lights");
}

// Q2
var x = 1;
var y = 1;
if (x == y) {
  var z = prompt("enter the value of z");
  document.write("the value of z is : " + z);
}

// Q3
zipCode = prompt("Enter Zip code");
if (zipCode == 10010) {
  alert("karachi");
} else {
  alert("please write correct city");
}

// Q4
x = 1;
y = 2;
if (x === 1) {
  x = y;
  document.write("value of x : " + x);
}

// chap 11 (Comparison operator)

// Q1
if (x !== y) {
}

// Q2
var value1 = 4;
var value2 = 3;
if (value1 >= value2) {
  document.write("the value is greater");
}

// Q3
var num = 12;
if (num !== 13) {
  var num = 13;
  document.write(num);
}

// Q4
var num1 = 12;
var num2 = 13;
if (num1 !== num2) {
  alert("Congratulations");
}

// Q5
firstName = prompt("Enter First name");
anotherName = "ali";
if (firstName !== anotherName) {
  alert("No match");
}

// chap 12 (if else and else if statements)

// Q1
var value1 = 30;
var value2 = 25;
if (value1 >= value2) {
  alert("this is greater value");
} else {
  alert("this is lower value");
}

// Q2
maths = parseInt(prompt("enter maths marks"));
english = parseInt(prompt("enter english marks"));
urdu = parseInt(prompt("enter urdu marks"));
obtain = urdu + english + maths;
total = 300;
percentage = (obtain / total) * 100;
document.write("<h1>Marks Sheet</h1> <br>");
document.write("Total marks : " + total);
document.write("<br> obtain marks : " + obtain);
document.write("<br>percentage : " + percentage + "<br>");
if (percentage >= 80) {
  document.write("Grade : A-one <br>" + "Remarks : Excellent");
} else if (percentage >= 70) {
  document.write("Grade : A <br>" + "Remarks : Good");
} else if (percentage >= 60) {
  document.write("Grade : B <br>" + "Remarks : You need to improve");
} else if (percentage < 60) {
  document.write("Grade : Fail <br>" + "Remarks : Sorry");
}

// Q3
var a = 9;
if (a === 10) {
  alert("a is 10");
} else if (a !== 10) {
  alert("the correct value of a is " + a);
}

// Q4
city = prompt("Enter City name");
if (city == "karachi") {
  alert("It is Karachi");
} else if (city == "lahore") {
  alert("It is Lahore");
} else {
  alert("other city");
}

// chap 13 (testing sets of condition)

// Q1
var a = 10;
var b = 10;
var c = 10;
var d = 10;
if (((a == b) == c) == d) {
  document.write("true");
}

// Q2
var a = 10;
var b = 10;
var c = 12;
var d = 10;
if ((a == b, c !== d)) {
  document.write(true);
}

// Q3
name = "Hamza";
age = 69;
if ((name = "Hamza" || "Arsalan") && age < 60) {
  document.write(true);
} else {
  document.write(false);
}

// Q4
var num1 = 12;
var num2 = 10;
if (num1 >= num2) {
  alert("greater value");
} else if (num1 <= num2) {
  alert("lesser value");
}

// Q5
var firstName = "Muhammad";
var lastName = "Ali";
fname = prompt("Enter first name");
lname = prompt("Enter last name");

if (fname == firstName && lname == lastName) {
  alert("name match");
}

// chap 14(if statement nested)

// Q1
password = prompt("Enter your password");
if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// Q2
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// Q3
if (a === 1 && c === "Max") {
  alert("OK");
}

// Q4
var num1 = 10;
var num2 = 10;
if (num1 == num2) {
  if (num1 <= num2) {
    alert("numbers are equal");
  }
}

// chap 12-13

// Q1
character = prompt("Enter a character");
if (character >= 65 && character <= 90) {
  alert("upper case letter");
} else if (character >= 97 && character <= 122) {
  alert("lower case letter");
}

// Q2
num1 = parseInt(prompt("Enter first integer"));
num2 = parseInt(prompt("Enter second integer"));
if (num1 > num2) {
  alert("num1 is larger than num2");
} else if (num2 > num1) {
  alert("num2 is larger than num1");
} else {
  alert("Both integers are equal");
}

// Q3
num = prompt("Enter a number");
if (num > 0) {
  alert("The number is positive");
} else if (num < 0) {
  alert("The number is negative");
} else {
  alert("The number is zero");
}

// Q4
character = prompt("Enter a character");
if ((character == "a", "e", "i", "o", "u")) {
  alert(true);
} else {
  alert(false);
}

// Q5
password = 123456789;
answer = prompt("enter password");
if (answer == "") {
  alert("Please enter your password");
} else if (answer == password) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Q7
time = prompt("Enter time");
if ((time = "0100")) {
  alert("1 am");
} else if (time === "0200") {
  alert("2 am");
} else if (time === "0300") {
  alert("3 am");
} else if (time === "0400") {
  alert("4 am");
} else if (time === "0500") {
  alert("5 am");
} else if (time === "0600") {
  alert("6 am");
} else if (time === "0700") {
  alert("7 am");
} else if (time === "0800") {
  alert("8 am");
} else if (time === "0900") {
  alert("9 am");
} else if (time === "1000") {
  alert("10 am");
} else if (time === "1100") {
  alert("11 am");
} else if (time === "1200") {
  alert("12 am");
} else if (time === "1300") {
  alert("1 pm");
} else if (time === "1400") {
  alert("2 pm");
} else if (time === "1500") {
  alert("3 pm");
} else if (time === "1600") {
  alert("4 pm");
} else if (time === "1700") {
  alert("5 pm");
} else if (time === "1800") {
  alert("6 pm");
} else if (time === "1900") {
  alert("7 pm");
} else if (time === "2000") {
  alert("8 pm");
} else if (time === "2100") {
  alert("9 pm");
} else if (time === "2200") {
  alert("10 pm");
} else if (time === "2300") {
  alert("11 pm");
} else if (time === "1200") {
  alert("12 pm");
}