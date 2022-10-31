/*
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

var a = [5, -4.2, 3, 7];
var e = 3;

for (i = 0; i < a.length; i++) {
    if (e === a[i]) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}


/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var a = [-3, 11, 5, 3.4, -8]

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2;
    }
}
console.log(a);


/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var a = [4, 2, 2, -1, 6];
var minimum = a[0];

for (var i = 0; i < a.length; i++) {
    if (a[i] < minimum) {
        minimum = a[i];
        var index = i;
    }
}
console.log(minimum +', ' + index);


/*
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var a = [4, 2, 2, -1, 6];
var minimum = a[0];

for (var i = 0; i < a.length; i++) {
    if (a[i] < minimum) {
        minimum = a[i];
        delete a[3];
    }
}
console.log(minimum);

