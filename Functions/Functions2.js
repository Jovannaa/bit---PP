/*
1. Write a function to check whether the `input` is a string or not.
"My random string" --> true
12 --> false
*/

/*
var input = 0;
var result = "";

if (typeof (input) === "string") {
    result = "My random string";
} else {
    result = false;
}

console.log (result);
*/

function CheckIsString(input) {
    var result = "";
    if (typeof (input) === "string") {
        result = "My random string";
    } else {
        result = false;
    }

    return result;
}
 var x = CheckIsString ("Jovana");
 console.log(x);


 /*
 2. Write a function to check whether a string is blank or not.
"My random string" --> false
" " --> true
12 --> false
false --> false
*/

/*var a = "";
var resultt = 0;

if (a.length === 0) {
    resultt = true;
} else {
    resultt = false;
}
console.log(resultt);*/

function isBlankString (a) {
    var resultt = 0;
    if (a.length === 0) {
        resultt = true;
    } else {
        resultt = false;
    }
    return resultt;
}

console.log(isBlankString(""));






/*
3. Write a function that concatenates a given string n times (default is 1).
"Ha" --> "Ha";
"Ha", 3 --> "HaHaHa";
*/

/*var somestring = "Ha";
var values = 3;
var result = "";

for (var i = 0; i < 3; i++) {
    result += somestring;
}

console.log (result); */

function concatenatesString (somestring, values) {
    if (typeof(somestring) !== "string" || isFinite(values) === false) {
        console.log("Invalid input");
    }  
        var result = somestring;
    for (var i = 1; i < values; i++) {
        result += somestring;
       
    }
     return result;
    
}
   console.log(concatenatesString("Ha", 3));




   /*
   4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" --> 2
*/

function countLetter (string, letter) {
    if (typeof(string) || typeof (letter) !== "string") {
        var result = "Invalid input";
    }
     
    for (i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            result += 1;
        }
    }
    return result;
}

console.log(countLetter("www", "T"));


/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.
*/

/* var letterr = "t";
var string1 = "My random string";

var position = 0;

for (var i = 0; i < string1.length; i++) {
    if (string1[i] === letterr) {
        position = i
        break;
    } else {
        position = -1;
    }
}

console.log(position); */

function findPosition (string1, letterr) {
    if (typeof(string1) || typeof (letterr) !== "string") {
        var position = "Invalid input";
    }

    for (var i = 0; i < string1.length; i++) {
        if (string1[i] === letterr) {
            position = i
            break;
        }   else {
            position = -1;
        }
    }
    return position;
}

console.log(findPosition("My random string", "t"));


/*
6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
*/

/*var letter2 = "a";
var string2 = "Today is a great day";

var lastPosition = -1;

for (var i = 0; i < string2.length; i++) {
    if (string2[i] === letter2) {
        lastPosition = i;
        } 
}
console.log(lastPosition); */


function findeLastPosition (string2, letter2) {
    if (typeof(string2) || typeof (letter2) !== "string") {
        var position = "Invalid input";
    }

    var lastPosition = -1;
    for (var i = 0; i < string2.length; i++) {
        if (string2[i] === letter2) {
            lastPosition = i;
            } 
    }

    return lastPosition;
}

console.log(findeLastPosition("Today is a great day", "a"));

    

/*
7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
"My random string" --> ["M", "y", null, "r", "a";]
"Random" --> ["R", "a", "n", "d", "o", "m"]
*/

function stringToArray (string) {
    var arr = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            arr[arr.length] = string[i];
        } else {
            arr[arr.length] = null;
        }
    }
    return arr;
}
var r = stringToArray ("My random string");
console.log(r);




/*
8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/


function acceptsNumber (number) {
    var result = "";

    if (number > 0 && number % 1 === 0 && number % 2 === 0) {
        result = "Number is not prime."
    } else (number >= 1 && number/number === 1 && number % 1 === 0) 
        result = "Number is prime."
    
    return result
}
console.log(acceptsNumber(4));

/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string";
"My random string", "+" -> "My+random+string";
"My random string"; -> "My-random-string"; */

function stringWithSeparator (string, separator) {
    var result = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            result += separator;
        } else 
        result += string[i];
    }
    return result
}
console.log(stringWithSeparator("My random string", "+"));