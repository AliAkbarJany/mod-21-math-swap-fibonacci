/*
var numbers = [23, 89, 99, 76, 56, 34, 11, 82];
// console.log(numbers[5]);
var result = numbers[0];
console.log(result);
*/
// var numbers = [23, 89, 99, 76, 56, 34, 11, 82];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i]
//     // console.log(i, number);
//     // var sum = 0;
//     sum = sum + number;
//     console.log(sum);
// }

function age(ages) {
    var sum = 0;
    for (var i = 0; i < ages.length; i++) {
        var element = ages[i];
        sum = sum + element;
        console.log(sum);
    }
    // return sum;
}

var result = age([23, 89, 99, 76, 56, 34, 11, 82]);
console.log(result);

/*output====

"return" call na korle ses a result "undefined "
dekhabe.

23
112
211
287
343
377
388
470
undefined
*/
