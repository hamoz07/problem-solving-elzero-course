let chars = "2L33R54s6b7"
// / my solution
// let i = 0
let res = ''
// while(i< chars.length){
//   let current = chars[i]
//   let between = chars[i+1]
//   let next=chars[i+2]
//   let checkNum = current >= '0' && next <='9'
//   if(checkNum && (between < '0' || between > '9')){
//     res+=between
//   }
//   i++
// }

// ai solution
// Start at index 1 and stop before the last character
let i = 1;
while (i < chars.length - 1) {
  let prev = chars[i - 1];
  let current = chars[i];
  let next = chars[i + 1];

  // Check if character BEFORE and AFTER are BOTH valid digits ('0'-'9')
  let isPrevDigit = prev >= "0" && prev <= "9";
  let isNextDigit = next >= "0" && next <= "9";

  if (isPrevDigit && isNextDigit) {
    res += current;
  }

  i++;
}

console.log(res)

// Differences and bugs in the first solution vs. AI solution:
//
// 1. INCOMPLETE DIGIT CHECK:
//    `current >= '0'` isn't enough to check if a char is a digit because letters 
//    like 'L' or 'a' have ASCII values greater than '0', so they evaluate to true.
//    Correct check needs both bounds: `char >= '0' && char <= '9'`.
//
// 2. OUT-OF-BOUNDS ARRAY READ:
//    `while (i < chars.length)` causes `chars[i+1]` and `chars[i+2]` to evaluate 
//    to `undefined` on the final iterations, leading to comparison bugs.
//    Stopping at `chars.length - 1` prevents accessing non-existent indices.
//
// 3. INDEX CENTERING (Mental Model):
//    The AI centers the loop index `i` on the target middle character (`current`), 
//    checking `i-1` and `i+1`. This eliminates offset tracking and makes bound 
//    limits (`1` to `length - 1`) much easier to manage safely.