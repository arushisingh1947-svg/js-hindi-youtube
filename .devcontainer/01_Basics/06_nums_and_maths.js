const score = 400

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
const otherNumber = 123.89676

//console.log( otherNumber.toPrecision(3));
const hundreds =  10000000
//console.log(hundreds.toLocaleString());
// The upper line written gives the  comas in number based on international system to convert it into indian sytem whatever is used has been written below

//console.log(hundreds.toLocaleString('en-In'));
// **************************Maths**********
// math library comes by default along with javascript

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.min(4,5,6,9,10,15));



console.log(Math.random());
// it will generate the value between 0 and 1
// For generating the number we can multiply it by 10
console.log(Math.random()*10);
// to avoid the number 0.4 or something coming coming  we can add + 1 to it
console.log((Math.random()*10) +1);
//floor generally round off the number to the smallest
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min) ;