console.log("Hello World \n Hasan Vai! Akash Kar!");
console.log(typeof "Bangladesh");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof null);
// single line comment

/* 
this is
a multiline 
comment 
*/

var xyz = 123;
xyz += 2;
xyz -= 100;
xyz--;
console.log(xyz);
console.log(xyz);
/**
 * +
 * -
 * *
 * /
 * %
 * =
 * +=
 * -=
 * *=
 * /=
 * %=
 * ++
 * --
 * ==
 * ===
 * <
 * >
 * <=
 * >=
 * !=
 * !==
 * +
 * &&
 * ||
 */
var akashAge = 22;
if (akashAge !== "22") {
    console.log("Akash Batash");
}

// condition
var age = "Dhaka";
if (!isNaN(age)) {
    if (age <= 12 && age > 0) {
        console.log("You are a baby");
    } else if (age <= 19 && age > 12) {
        console.log("You are a teenager");
    } else if (age <= 29 && age > 19) {
        console.log("You are a young person");
    } else if (age <= 49 && age > 29) {
        console.log("You are a middle-aged person");
    } else if (age < 150 && age > 49) {
        console.log("You are an old person");
    } else {
        console.log("You are not in this world!");
    }
} else {
    console.log("Paknami bondho korun");
}

var n = 20;

switch (true) {
    case n < 30:
        console.log("Noyakhali bivag chai");
        break;

    case n == 30:
        console.log("Dangerous public");
        break;

    case n == 40:
        console.log("Dhaka is the capital");
        break;

    default:
        console.log("Bangladesh");
        break;
}

var city = "Kuakata";
/* 
var res;
if (city == "Dhaka") {
    res = "Ami vaat khai";
} else {
    res = "Ami vaat khai na";
} 
*/


var res = city == "Dhaka" ? "Ami vaat khai" : "Ami vaat khai na";
console.log(res);
var ashraful;
console.log(ashraful ?? "CSE Student");

