function fname(f) {
    return f;
}

function lname(l) {
    return l;
}

function fullName(f = "Chad", l = "Khan") {
    return fname(f) + " " + lname(l);
}

console.log(fullName("Md", "Ashraful"));
console.log(fullName("Akash", "Kar"));
console.log(fullName());
console.log(fullName("Bubly"));



function myName(mn) {
    return mn;
}

console.log(myName("Akash Kar"));
console.log(myName("Golam Rabbani"));

