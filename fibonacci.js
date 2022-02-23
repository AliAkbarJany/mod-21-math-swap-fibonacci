// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
// nth=(n-1)th+(n-2)th
// ith=(i-1)th+(i-2)th

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    // nth=(n-1)th+(n-2)th
    // ith=(i-1)th+(i-2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);


function add(a, b) {
    return a + b;
}
var result = (add(('adam' + 'eve'), ('rafsan')));
console.log(result);