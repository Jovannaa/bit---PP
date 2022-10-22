/* 
Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console.
*/

var a = 4;
var b = 6;

if (a > b) {
    console.log(a);
} 
else if (b > a); {
    console.log(b);
}
    
/*
Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.

Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd
*/

var a = 3;
var result = ' ';

if (a % 2 === 0) {
    result = 'even';
} else {
    result = 'odd';
}
console.log(result);



var a = 4;
var result = ' ';

if (a % 2 === 0) {
    result = 'even';
} else {
    result = 'odd';
}
console.log(result);



var a = 9;
var result = ' ';

if(a % 2 === 0) {
    result = 'even';
} else {
    result = 'odd';
}
console.log(result);


/* 
Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.

Sample numbers: 15, 12 (check one at the time)
Output: 15
*/

var a = 15;

if (a % 3 === 0) {
    console.log(a);
}

if (a % 5 === 0) {
    console.log(a);
}


var b = 12;

if (b % 3 === 0) {
    console.log(b);
}

if (b % 5 === 0) {
    console.log(b);
}


/* 
Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.

Sample numbers: 3, -7, 2
Output: The sign is -
*/

var a = 3;
var b = -7;
var c = 2;

if (a*b*c<0)
console.log('The sing is -');

//ili

if (a<0 || b<0 || c<0) {           
    console.log('The sign is -');    
} 


/*
Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | X
*/

var a = 10;
console.log(typeof a);

if(typeof a )
if(a % 2 === 0) {
    console.log(a/2);   
}
else {
    console.log('X');
}




var a = 7;
console.log(typeof a);

if (a % 2 === 0) {
    result = '7/2=3,5';
}
else {
    result = 'X';
}
console.log(result);


/*
Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

Sample numbers: -5, -2, -6, 0, -1
Output: 0
*/

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if(a>b && a>c && a>d && a>e) {
    console.log(a);
}
else if(b>a && b>c && b>d && b>e) {
    console.log(b);
}
else if(c>a && c>b && c>d && c>e) {
    console.log(c);
}
else if(d>a && d>b && d>c && d>e) {
    console.log(d);
}
else {
    console.log(e);
}


/*
Task 3.
Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, 4, -1
Output : 4, 0, -1
*/

const numbers = [0, 4, -1];
numbers.sort();
console.log(numbers);




/*
Task 6. 
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F
*/

var tempC = 60;
var tempF = (9 * tempC / 5) + 32;
console.log(tempC + 'C is ' + tempF + 'F');  




/*
Task 7. 
Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11             Sample Input: 32
Output : 2                    Output : 38
*/

var a = 11;

if(a < 13) {
    console.log("a je manje od "+ a);
} 
else {
    console.log('input is not greater than 13');   
}

var b = 32;
var x = 13;
if(b > x) {
    console.log((b-x)*2);
}
else {
    console.log('b is not greater than 13');
}


/*
Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5   Sample Input: 8,8
Output : 17           Output : 48
*/ 
 
var a = 12
var b = 5

if (a === b) {
    console.log((a+b)*3);
}
else {
    console.log(a+b);
}


var c = 8;
var d = 8;

if (c === d) {
    console.log((c+d)*3);
}
else {
    console.log(c+d);
}



/*
Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.

Sample Input: 5,54  Sample Input: 6,50   Sample Input: 40,10
Output : -          Output : true        Output : true
*/

var a = 5;
var b = 54;

if (a === 50 || b === 50 || (a+b===50)) {
    console.log('true');
}
else {
    console.log('-');
}

var c = 6;
var d = 50;

if(c === 50 || d === 50 || (c+d===50)) {
    console.log('true');
}
else {
    console.log('-');
}

var e = 40;
var f = 10;

if(e === 50 || f === 50 || (e+f===50)) {
    console.log('true');
}
else {
    console.log('-');
}



/*
Task 10. 
Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13   Sample Input: 34     Sample Input: 256
Output : -         Output : 20 ⇔ 100   Output : 100 ⇔ 400
*/

var a = 13;
if(a >= 20 && a <= 100) {
    console.log('true');
}
else {
    console.log('-');
}


var b = 34;
if(b >= 20 && b <= 100) {
    console.log('true');
}
else {
    console.log('-');
}

var c = 256;
if(c >= 100 && c <=400) {
    console.log('true');
}
else {
    console.log('-');
}