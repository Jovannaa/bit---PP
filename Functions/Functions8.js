//IIFE = Immediately Invoked Function Expressions//

/*
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
*/



var result = (function replacesArr (array) {
    var temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;

     
    return array
})([4, 5, 11, 9])
    
console.log(result);



/*
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20
*/

var result = (function calculates(a,b) {
    return a*b

})(4, 5)

console.log(result);




/*
3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2
*/

(function replaceLetter (letters) {
    var result = []; count = 0;
    for (i = 0; i < letters.length; i++) {
      if (letters[i] === 'm' || letters[i] === 'M') {
        result += "*";
        count++;
     } else {
        result += letters[i]
        }
    }
    
})('prograMming')

console.log(result, count);


/*
4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com
*/

(function(name, surname) {
    console.log(name + "." + surname + "@gmail.com")

})("pera", "peric")


/*
5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28 */

(function calculateDecimal(octalnb) {
    console.log(parseInt(octalnb))

}) (034)

/*
6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!
*/









/*
7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]
*/

function filter(array, cb) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var isTrue = cb(element);
        if (isTrue) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray
} 

var v = filter([2, 8, 11, 4, 9, 3], function isOdd(e) {return e % 2 !== 0});
console.log(v)