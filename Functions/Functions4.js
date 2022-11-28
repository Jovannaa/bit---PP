/*
1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no 
*/

function checkIfIsInArray(array, element) {
    var result = "No";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            result = "Yes"
        } 
    } return result
}
console.log(checkIfIsInArray([5, -4.2, 18, 7], 3))


/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
 */

function multiplyPositive(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0 ) {
            result[i] = array[i] * 2;
        } else {
            result[i] = array[i];
        }
    } return result
}
console.log(multiplyPositive([-3, 11, 5, 3.4, -8]))


/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function findsMin (array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i];
        } output = result + ", " + array.indexOf(result);
    } return output;
}

console.log(findsMin ([4, 2, 2, -1, 6]))


/*
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 
*/







/*
/* Task 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. 
*/


function checkSymmetric (array) {
    var result = "The array is symmetric"
    for (var i = 0, j = array.length - 1; i <= j; i++, j--) {
        if (array[i] !== array[j]) {
        result = "The array isn't symmetric.";
        break;
        }
    } return result
}
console.log(checkSymmetric([2, 4, -2, 7, -2, 4, 2]))


/*
7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwinesArrays (array1, array2) {
    var array3 = [];
    for (i = 0; i < array1.length; i++) {
        array3[array3.length] = array1[i];
        array3[array3.length] = array2[i];
    }
    return array3
}

console.log(intertwinesArrays([4, 5, 6, 2], [3, 8, 11, 9]));

/*
8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenatesArrays (array1, array2) {
    var array3 = [];
    for (i = 0; i < array1.length; i++) {
        array3 = array1 + "," + array2;
    }
    return array3
}

console.log(concatenatesArrays([4, 5, 6, 2], [3, 8, 11, 9]))

/*
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElement (array, e) {
    var result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] === e) {
            delete array[i];
            result = array
        }
    }
    return result
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 2))

