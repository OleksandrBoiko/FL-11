let a1 = Number(prompt("Enter the number of x-axis coordinate", ""));
let a2 = Number(prompt("Enter the number of y-axis coordinate", ""));
let b1 = Number(prompt("Enter the number of x-axis coordinate", ""));
let b2 = Number(prompt("Enter the number of y-axis coordinate", ""));
let c1 = Number(prompt("Enter the number of x-axis coordinate", ""));
let c2 = Number(prompt("Enter the number of y-axis coordinate", ""));

let xAxisC = (a1 + b1) / 2;
let yAxisC = (a2 + b2) / 2;

if (c1 === xAxisC && c2 === yAxisC) {
    console.log(true);
    } else {
    console.log(false);
};