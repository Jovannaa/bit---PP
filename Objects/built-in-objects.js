/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

var arr = [2, 4, 7, 11, -2, 1];

let result = arr.map(item => [item, item]).reduce((acc, arr) => acc.concat(arr));

console.log(JSON.stringify(result, null, 2));


/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */


