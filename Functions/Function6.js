/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */

function countVowels(string) {
    var result = 0, i = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
            result++;
        }
    }
    return result;
}
console.log(countVowels("Programming"));


/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] --> [‘a’,1,’b’,2,’c’,3] */

function alternateElements(array1, array2) {
    var output = [];
    
    for (i = 0; i < array1.length; i++, j = 0, j < array2.length, j++) {
        output += array1[i] + array2[i];
    }
    return output;
}
console.log(alternateElements(["a","b","c"], [1,2,3]));

/* 5. Write a program that prints a multiplication table for numbers up to 12. */

function multiply12(n) {
    var result = 1, output = "", i, j;
    if (n <= 12) {
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= n; j++) {
            result = i * j;
            output += result + " ";
            }
        }
    }
    return output;
}
console.log(multiply12(3));

/* 6. Write a function to input temperature in Centigrade and convert to Fahrenheit. */

function convertCToF(temp) {
    var output = "", result = 0;
    result = (temp * 9/5) + 32;
    output = temp + " degrees C equals to " + result + " degrees F";
    return output;
}
console.log(convertCToF(20));




