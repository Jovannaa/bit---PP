/* 1. Write a program that calculates the maximum of two given numbers. */

function calculatesMax (a, b) {
    if (a > b) 
    return a
    else (b > a) 
    return b
}
console.log(calculatesMax(20,15));

/* 2. Write a program that checks if a given number is odd. */

function checkIsOdd (number) {
    if (number % 2 !== 0)
    return "Number is odd."
    else 
    return "Number is even."
}

console.log(checkIsOdd(8));

/* 3. Write a program that checks if a given number is a three digit long number. */

function check (num) {
    if ( num > 99 && num < 1000) return "The number is a three digit number."
    return "The number isn't three digit number."
}
console.log(check(128));

/* 4. Write a program that calculates an arithmetic mean of four numbers. */

function calcArithmetic (num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++){
        sum += num[i];
    }
    return (sum / 4)
}
var num = [1, 2, 3, 4];
console.log(calcArithmetic(num));

/* 5. Write a program that draws a square of a given size. For example, if the size of
square is 5 the program should draw:
*****
* *
* *
* *
*****
*/

function drawSquare (dimension) {
    var result = "";
    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++){
            if (i === 0 || i === dimension - 1 || j === 0 || j === dimension - 1){
            result += "*";
        } else {
            result += " ";
        }
    }
    if (i !== dimension - 1) result += "\n";
    }
    return result;
}
var r = drawSquare(10);
console.log(r);

/* 7. Write a program that calculates a number of digits of a given number. */






/* 8. Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

function calcAppearances (arr, e){
    var result = 0;
    for (var i = 0; i < arr.length; i++){
        if (e === arr[i]) result ++;
    }
    return result;
}
console.log(calcAppearances([2,4,7,8,7,7,1], 7));

