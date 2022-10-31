for (var x = 0; x <= 10; x++) {
    console.log (x * x);
}


/*
1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
*/

for (var i=0; i<=15; i++) {
    if (i % 2 === 0) {
     console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}


/* 2. Write a program to sum the multiples of 3 and 5 under 1000.
*/

var sum = 0;
for (x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
        sum += x;
    }
}
console.log(sum);


/*
3. Write a program to compute the sum and product of an array of integers.
*/

var arr = [1, 2, 3, 4, 5];
var sum = 0;
var product = 1;

for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
}
console.log("Sum is " + sum);
console.log(product);


/*
4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefinde];
*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

for (var i = 0; i < x.length; i++)
{
    console.log(x[i]);
}

/*
5. Write a program that prints the elements of the following array.
var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];
*/

var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];

for (var i = 0; i < a.length; i++)
{
    console.log(a[i]);
}

/*
6. Write a program that outputs the sum of squares of the first 20 numbers.
*/

var sum = 0;

for (i = 0; i <= 20; i++)
{
    sum += i*i;
}
console.log(sum);

/*
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68

The grades are computed as follows :

<60% F
<70% D
<80% C

<90% B
<100% A
*/

var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var Avgmarks = 0;
var sum = 0;

for (var i = 0; i < students.length; i++)
{
    sum += students[i][1];
}

var avg = sum / students.length;
var grade = '';

if (avg <= 60) {
    grade = 'F';
} else if (avg <= 70) {
    grade = 'D';
} else if (avg <= 80) {
    grade = 'C';
} else if (avg <= 90) {
    grade = 'B';
} else {
    grade = 'A';
}

console.log('Avergage points: ' + avg);
console.log('Grade ' + grade);


/*
8. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz"", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz&"" for numbers divisible by only one of those).
*/

for (i=1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log ("Buzz");
    } else {
        console.log(i);
    }
}

