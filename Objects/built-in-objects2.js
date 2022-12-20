/* 1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -&gt; 54321 */




/* 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -&gt; “abeemrstw” */

var sortStr = function(a) {
    var strArr = a.toLowerCase().split("").sort().join("");
    return strArr;
}

var c = sortStr("Webmaster");
console.log(c);

/* 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" --> "Rbceilpu Of Sabeir" */


var alphabetizeWords = function (a) {
    var alphStr = a.split(" ")
    var x = alphStr.map(function (e) {
        return e.split("").sort().join("");
        console.log(e);
    })
    
    return x.join(" ");
    console.log(x);
}
var c = alphabetizeWords('Republic Of Serbia');
console.log(c);

/* 4. Write a function to split a string and convert it into an array of words.
"John Snow" --> [ 'John', 'Snow' ] */

var convertingStr = function (a) {
    var newStr = a.split(" ")
    console.log(newStr);
    return newStr;
}

convertingStr('John Snow');

/* 5. Write a function to convert a string to its abbreviated form.
"John Snow" --> "John S." */

var convertStr = function (a) {
    var newString = a.split(" ")
    newString[1] = newString[1].slice(0,1) + '.'
    return newString.join(" ");
}
var c = convertStr('John Snow')
console.log(c);

/* 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
'0000', ‘123’, 'l' --> '0123'
'00000000', ‘123’, 'r' --> '12300000' */

var addLeters = function (oldWord, newWord, type) {
    var result = "";
    var index = 0;

    if (type === "l") {
        index = oldWord.length - newWord.length;
        result = oldWord.slice(0, index) + newWord;
    }
    if(type === "r") {
        var indexTwo = newWord.length - 1;
        result = newWord + oldWord.slice(indexTwo, -1);
    }
    return result;
}

var x = addLeters('00000000', '123', 'r');
console.log(x);


/* 7. Write a function to capitalize the first letter of a string and returns modified string.
&quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot; */

var firstLeterr = function (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1, -1)
}

var x = firstLeterr('js string exercises');
console.log(x);

/* 8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" --> "somerand...@example.com" */

var hideEmail = function (a) {
    var indexOf = "";
    

    console.log(a.indexOf('@'));
}

hideEmail('somerandomaddress@example.com');

