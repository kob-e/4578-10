var num1 = Math.random();
console.log(num1);

if (num1 > 0.5) {
    console.log("bigger then 0.5");
} else {
    console.log('Not bigger then 0.5');
}

console.log('-------------- Math operators --------------'); 
// Math operators
console.log('4+2 =', 4+2);
console.log(4-2);
console.log(4*2);
console.log(4/2);
console.log(11 % 2);

var a = 2;
a *= 10; //a = a * 10;
a -= 10; //a = a - 10;
a += 10; //a = a + 10;
a /= 10; //a = a / 10;
a %= 10; //a = a % 10;
console.log(a);

var b = 3;
b++; // b = b + 1;
var c = 2;
c--; // c = c - 1;
console.log(c);

// Equation operators
console.log(4 > 4);
console.log(4 < 2);
console.log(4 == 2);
console.log(4 >= 4);
console.log(4 <= 4);
console.log(2 != 2); // Different operator - equation



// Opposite operator - boolean
console.log(!true);
console.log(!false);
console.log(!!!!!!!!!!!!!!!!!!!!!!!!!false);

console.log('-------------- And --------------'); 
// And
console.log("2 > 1 && 4 > 5 =", 2 > 1 && 4 > 5);
console.log("2 > 1 && 6 > 5 =", 2 > 1 && 6 > 5);


console.log('-------------- Or --------------');
// And
console.log("2 > 1 || 4 > 5 =", 2 > 1 || 4 > 5);
console.log("2 > 1 || 6 > 5 =", 2 > 1 || 6 > 5);


/* 
    multi line   
    comment
*/

/* if else */
var randomNumber = Math.random() * 5;
randomNumber = Math.ceil(randomNumber); // Natural number only
if (randomNumber % 3 == 0) {
    console.log("Fizz");
}

if (randomNumber % 5 == 0) {
    console.log("Buzz");
}


/* multiple if else */
var age = 51;
if (age > 50) {
    console.log("Your age is above 50");
} else if (age > 40) {
    console.log("Your Between 40 to 50");
} else if (age > 30) {
    console.log("Your Between 30 to 40");
} else if (age > 20) {
    console.log("Your Between 20 to 30");
} else {
    console.log("Your age is 20-");
}