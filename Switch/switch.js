/*
1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.
*/

var daysInWeek = 5;
var result = '';

switch (daysInWeek) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
}

console.log(result);


/*
2. Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/

var daysInWeek = 10;
var result = '';

switch (daysInWeek) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
        default:
            result = 'Input must be a number between 1 and 7';
}

console.log(result);

/*
3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/

var daysInWeek = 2;
var result = '';

switch (daysInWeek) {
    case 1:
        result = "It's weekday";
        break;
    case 2:
        result = "It's weekday";
        break;
    case 3:
        result = "It's weekday";
        break;
    case 4:
        result = "It's weekday";
        break;
    case 5:
        result = "It's weekday";
        break;
    case 6:
        result = "It's weekend";
        break;
    case 7:
        result = "It's weekend";
        break;
        default:
            result = 'Input must be a number between 1 and 7';
}

console.log(result);

/*
4. Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/


var month = 3;
var result = '';

switch (month) {
    case 1:
        result = "January";
        break;
    case 2:
        result = "February";
        break;
    case 3:
        result = "March";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "May";
        break;
    case 6:
        result = "Jun";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break;
    case 12:
        result = "December";
        break;
        default:
            result = 'Input must be a number between 1 and 12';
}

console.log(result);

/*
5. Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.
*/

var month = 3;
var result = '';

switch (month) {
    case 1:
        result = "Winter";
        break;
    case 2:
        result = "Winter";
        break;
    case 3:
        result = "Spring";
        break;
    case 4:
        result = "Spring";
        break;
    case 5:
        result = "Spring";
        break;
    case 6:
        result = "Summer";
        break;
    case 7:
        result = "Summer";
        break;
    case 8:
        result = "Summer";
        break;
    case 9:
        result = "Autumn";
        break;
    case 10:
        result = "Autumn";
        break;
    case 11:
        result = "Autumn";
        break;
    case 12:
        result = "Winter";
        break;
        default:
            result = 'Input must be a number between 1 and 12';
}

console.log(result);

/*
6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.
*/

var grade = "A";
var result = "";

switch (grade) {
    case "A":
        result = 'Good job';
        break;
    case "B":
        result = 'Prrety good';
        break;
    case "C":
        result = 'Passed';
        break;
    case "D":
        result = 'Good';
        break;
    case "F":
        result = 'Failed';
        break;
}

console.log(result);

/*
7. Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself,however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message: Please choose a different city.
*/

var Serbia = "Beograd";
var result = "";

switch (Serbia) {
    case "Beograg":
    case "Novi Sad":
    case "Nis":
    case "Subotica":
    case "Kragujevac":
        result = "This is a city of Serbia";
        break;
        default:
            resul = "Pleas choose a diffrent city";
}   
    console.log(result);

var Bosnia = "Sarajevo";
var resul = "";

switch (Bosnia) {
    case "Sarajevo":
    case "Prijedor":
    case "Bijeljina":
    case "Laktasi":
    case "Tuzla":
        result = "This is a city of Bosnia";
        break;
        default:
            result = "Pleas choose a  diffrent city";
}
console.log(result);

var Germany = "Berlin";
var resul = "";

switch (Germany) {
    case "Berlin":
    case "Koln":
    case "Munchen":
    case "Hamburg":
    case "Augsburg":
        result = "This is a city of Germany";
        break;
        default:
            result = "Pleas choose a  diffrent city";
}
console.log(result);

var Montenegro = "Podgorica";
var resul = "";

switch (Montenegro) {
    case "Podgorica":
    case "Cetinje":
    case "Bar":
    case "Ulcinj":
    case "Budva":
        result = "This is a city of Montenegro";
        break;
        default:
            result = "Pleas choose a  diffrent city";
}
console.log(result);


var Croatia = "Zagreb";
var result = "";

switch (Croatia) {
    case "Zagreb":
    case "Dubrovnik":
    case "Vukovar":
    case "Rijeka":
    case "Knin":
        result = "This is a city of Croatia";
        break;
        default:
            result = "Pleas choose a  diffrent city";
}
console.log(result);


/*
8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
*/

var a = 2;
var b = 3;
var operator = "*";
var resalt = '';

switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = a / b;
    break;
}
console.log(result);



