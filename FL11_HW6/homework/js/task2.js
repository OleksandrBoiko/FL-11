let a = Number(prompt("Enter the length of the first side of triangle:", ""));
let b = Number(prompt("Enter the length of the second side of triangle:", ""));
let c = Number(prompt("Enter the length of the third side of triangle:", ""));

if (!(a + b <= c && a + c <= b && b + c <= a)) {
    console.log("Triangle doesn't exist");
} else if (a === b && b === c && a === c) {
    console.log("Equivalent triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
} else {
    console.log("Normal triangle");
};