/*
1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS" ==> "JS My random string"
"My random string", "JS", 10 --> "My random JS string"
*/






/*
2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, "", undefined, 47, null]
*/



function joinToString (arr) {
    var result = "";

    for (var i = 0; i < arr.length; i++) {
        if(isFinite(arr[i]) && arr[i] !== null) {

            result += arr[i]    // result = result + ' ' + arr [i]
        }
        
    }
    return result;
}

 var arr = [NaN, 0, 15, false, -22, "", undefined, 47, null]
 console.log(joinToString(arr));




/*
3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] --> [15, -22, 47]
*/


function removeFalsy (arr) {
    var a = [];
    for (i = 0; i < arr.length; i++) {
        if (!arr[i]) {
             delete arr[i]
        }
    }
    return arr
}

var f = removeFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log (removeFalsy(f));



/*
4. Write a function that reverses a number. The result must be a number.
12345 --> 54321 // Output must be a number
*/

function reverseNumber (n) {
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(reverseNumber(12345));



/*
5. Write a function to get the last element of an array. Passing a parameter "n" will return the last "n" elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 3-> [0, -2] 
*/

/* var arr = [7, 9, 0, -2];
var n = 3;
var newArr = [];
for ( i = 0; i < n; i++ ) {
    newArr[i] = arr[(arr.length-1)-i];
}
console.log(newArr);  */

function getLastElements(arr, n) {
    var newArr = [];
    for ( i = 0; i < n; i++ ) {
        newArr[i] = arr [(arr.length-1)-i];
    }
    return newArr; 
}

var newArr1 = getLastElements( [7, 9, 0, -2], 2);
console.log(newArr1);
