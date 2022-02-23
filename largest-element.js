function largestElement(numbers) {
    var largest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        // console.log(i, element);
        if (element > largest) {
            largest = element;
            console.log(largest);
        }
        // return largest;
    }
    return largest;

}

var result = largestElement([9, 12, 67, 34, 90, 100, 23]);
console.log('i am the largest:', result);

var result2 = largestElement([-7, -2, -4, -3, -1]);
console.log('i am oldest', result2);