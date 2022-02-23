
let ami = 120;
let tumi = 12270;
var tara = 2390;

if (ami > tumi && ami > tara) {
    console.log('i am the largest', ami);
}
else if (tumi > ami && tumi > tara) {
    console.log('you are the largest', tumi);
}
else {
    console.log('tara hooi sobar boro', tara)
}

// "max" with function=

function findLargest(kajol, makij, sumon) {
    if (kajol > makij && kajol > sumon) {
        return kajol;
    }
    else if (makij > kajol && makij > sumon) {
        return makij;
    }
    else {
        return sumon;
    }

}

var largest = findLargest(12, 45, 90);
console.log('largest is:', largest);


// "max"  and "min"=====

var rafsan = 888;
var xenon = 999;
var redon = 1111;

Math.max(rafsan, xenon, redon);
console.log(Math.max(redon));

var Max = Math.max(rafsan, xenon, redon);
console.log('largest is', Max);

var Min = Math.min(rafsan, xenon, redon);
console.log('lowest is', Min);
