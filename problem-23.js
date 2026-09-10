//! my solution
let letters = "aaabcde" // aaaabbccdde
// check if there's something after the letter standing on , if not
 // then add it normally to container
// if there's something check if its a diff letter
 // if so then add it to container twice
  // if not then add it once

for (let j =0;j<letters.length;j++){
  if(letters[j+1] == letters[j] || !letters[j+1]){
    container+=letters[j]
  }else{
    container+=letters[j].repeat(2)
  }
}

console.log(container)

// ai better solutions
//1
// let container = ""
// for (let j = 0; j < letters.length; j++) {
//   const isTransition = letters[j + 1] && letters[j + 1] !== letters[j];
//   container += letters[j].repeat(isTransition ? 2 : 1);
// }

//2
// let letters = "aaabcde";
// const result = [];

// for (let j = 0; j < letters.length; j++) {
//   const char = letters[j];
//   const nextChar = letters[j + 1];

//   result.push(char);
//   if (nextChar && nextChar !== char) {
//     result.push(char); // Push second time only on letter transition
//   }
// }

// const container = result.join("");

// console.log(container); // "aaaabbccdde"

// elzero's solution (like 2nd ai solution but simpler)
// let txt = prompt("Enter The String To Double: ");

// let result = "";
// let i = 0;

// while (i < txt.length) {
//   result += txt[i];

//   if (i < txt.length - 1 && txt[i] !== txt[i + 1]) {
//     result += txt[i];
//   }

//   i++;
// }

// console.log(result);