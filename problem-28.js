let mynum = 12035
let reversedArr =[]
//* thinking process
//~ convert to string
//~ start a reversed loop on the string
//~ in this loop each number is added to reversedArr using + or Number()

let newString = String(mynum)
let i = newString.length - 1

while (i >= 0){
  reversedArr.push(+newString[i])
  i--
}

console.log(reversedArr)
//! my other solution
//* thinking process
//~ keep it as number but first * 0.1, store the result in a variable (var 1)
//~ var2 = var 1 - truncated var 1
//~ var * 10 or * 100 or 1000 depending on how big v2 decimally is
//~ push that value to reversedArr
let length = Math.floor(Math.log10(mynum))
let number = mynum
let newRev = []
while (length >= 0){
number *= 0.1
var topush = (number - Math.trunc(number)) * 10
newRev.push(Math.trunc(topush.toFixed(1)))
length--
}

console.log(newRev)
//& ai solution
let newReversed = [];

while (mynum > 0) {
  let lastDigit = mynum % 10; // 1. Extract the rightmost digit
  newReversed.push(lastDigit);      // 2. Add it to the array
  mynum = Math.floor(mynum / 10); // 3. Drop the rightmost digit
}

console.log(newReversed);