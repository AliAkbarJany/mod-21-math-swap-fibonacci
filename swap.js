let first = 30;
let second = 77;

let temorary = first;
first = second;
second = temorary

console.log(first, second);

// another way to 'swap'=======
let num1 = 45;
var num2 = 90;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);
