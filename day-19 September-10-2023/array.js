var person1 = ["Akash Kar", "Gazipur", "Male", 24, true, null];
var person2 = ["Sakin-Al-Hasan", "Magura", "Male", 34, false, 1];

console.log(person1[0] + " lives in " + person1[1]);
person1.push("Bangladesh", "Dunia");
person1.pop();
person1.unshift("Mrs.", "Mr");
person1.shift();
console.log(person1.length);

for (var i = 0; i < person1.length; i++) {
    console.log(person1[i]);
}

var students = [
    ["Ashraf", "Gazipur", 24],
    ["Akash", "Gazipur", 24],
    ["Goalam", "Cumilla", 22],
    ["Chad", "Dhaka", 27]
];

for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}

