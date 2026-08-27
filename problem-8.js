//! my solution:
// const arr = [1,1,1,2,2,2,2,4,4,2,3]
// let obj= {}
// for(let i=0;i<arr.length;i++){
//   obj[arr[i]] = 1;
// }
// for (let i = 0;i<arr.length;i++){
//   Object.entries(obj).map(j => {
//     if(arr[i] == j[0] && arr[i+1] == arr[i]){
//       obj[arr[i]] +=1;    
//     }else{
//       streak = 1
//     }
//   })
// }

// let entries = Object.entries(obj);
// let greatest = entries[0]
// var i = 1;
// console.log(entries.length)
// while(i< entries.length){
//   if(entries[i][1] > greatest[1]){
//     console.log(`most repeated number consecutively is ${entries[i][0]} and was repeated ${entries[i][1]} times`)
//     break;
//   }else if(entries[i][1] < greatest[1]){
//     console.log(`most repeated number consecutively is ${greatest[0]} and was repeated ${greatest[1]} times`)
//     break;
//   }
//   i++;
// }

// console.log(obj)

//! corrected with ai:

// const arr = [1,1,1,2,2,2,2,4,4,2,3]
// let obj= {}
// for(let i=0;i<arr.length;i++){
//   obj[arr[i]] = 1;
// }

// let currentStreak = 1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i + 1]) {
//     currentStreak++;
//   } else {
//     // Save the maximum streak found so far for this number
//     obj[arr[i]] = Math.max(obj[arr[i]] || 0, currentStreak);
//     currentStreak = 1; // Reset streak for the next number group
//   }
// }

// let entries = Object.entries(obj);
// let greatest = entries[0];
// var i = 1;

// while (i < entries.length) {
//   if (entries[i][1] > greatest[1]) {
//     greatest = entries[i]; // Update the leader if a higher count is found
//   }
//   i++; // Move to the next item in every iteration
// }

// console.log(`most repeated number consecutively is ${greatest[0]} and was repeated ${greatest[1]} times`);

// corrections:

// Key Improvements
// for part 2 of logic: 
// - Eliminated the nested Object.entries() loop: Instead of looping over all object keys on every single element ($O(N \times K)$ execution time), this scans the array once in $O(N)$ time.
// - Updated obj only when a streak completes: currentStreak increments while adjacent elements match (arr[i] === arr[i + 1]). When the next number differs—or when arr[i + 1] reaches undefined at the end of the array—it writes the total count to obj.
// - Handled separated groups with Math.max: If a number appears in multiple separate groups (for example [2, 2, 4, 2, 2, 2]), Math.max records its longest single consecutive run (3) rather than adding the groups together (5).
// for part 3 of logic:
// - Removed break: Now i++ runs on every loop iteration, allowing it to scan the full array.
// - Removed the else if branch: If an item's count isn't larger than greatest[1], the loop simply does nothing and moves to the next index.
// Moved console.log outside: The winner is logged only after the while loop finishes scanning every entry.

//! Best version of the code:
// const arr = [1, 1, 1, 2, 2, 4, 4, 2, 3];

// let maxNum = arr[0];
// let maxStreak = 1;
// let currentStreak = 1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i + 1]) {
//     currentStreak++;
//   } else {
//     // Check if the streak that just ended beats our global record
//     if (currentStreak > maxStreak) {
//       maxStreak = currentStreak;
//       maxNum = arr[i];
//     }
//     currentStreak = 1; // Reset for next group
//   }
// }

// console.log(`most repeated number consecutively is ${maxNum} and was repeated ${maxStreak} times`);

// Why this structure is ideal:
// - Single Pass: Iterates through the array once ($O(N)$ time complexity).
// - Zero Extra Memory: Doesn't create objects or arrays in memory ($O(1)$ space complexity).
// - Handles Edge Cases: Correctly processes single-element arrays and distinct consecutive groups.

//! adding features (recommended by gemini):
//! feature 1  (ifnding only two numbers with the same times of repitition )-- my attempt:
// const arr = [1, 1, 1, 2, 2, 2, 4, 4, 3];
// let maxNum = arr[0];
// let secMaxNum = null;
// let maxStreak = 1;
// let tie = 0;
// let currentStreak = 1;
// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i + 1]) {
//     currentStreak++;
//   } else {
//     if (currentStreak > maxStreak) {
//       maxStreak = currentStreak;
//       maxNum = arr[i];
//     }
//     if (tie < currentStreak) {
//       tie = currentStreak
//     }
//   }
//   if (tie == currentStreak) {
//     counter += 1
//   }
//   if (counter == 2) {
//     secMaxNum = arr[i];
//   }
//   console.log("currentStreak: ", currentStreak)
//   console.log('counter: ', counter)
//   console.log("tie: ", tie)
//   if (arr[i] !== arr[i + 1]) {
//     currentStreak = 1;
//   }
// }
// console.log(`most repeated number consecutively is ${maxNum} and was repeated ${maxStreak} times`);
// if (secMaxNum != null) {
//   console.log(`second most repeated number consecutively is ${secMaxNum} repeated also ${maxStreak} times`);
// } 

// feature 1 -- corrected by ai:
// const arr = [1, 1, 1, 2, 2, 2, 4, 4, 3];

// let maxNum = arr[0];
// let secMaxNum = null;
// let maxStreak = 1;

// let tie = 0;
// let counter = 0;
// let currentStreak = 1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i + 1]) {
//     currentStreak++;
//   } else {
//     // Only evaluate finished streaks
//     if (tie < currentStreak) {
//       // 1. Brand new record found: update max values and reset tie state
//       tie = currentStreak;
//       maxStreak = currentStreak;
//       maxNum = arr[i];
//       secMaxNum = null;
//       counter = 1;
//     } else if (tie === currentStreak) {
//       // 2. A matching streak found: increment tie counter
//       counter++;
//       if (counter === 2) {
//         secMaxNum = arr[i];
//       }
//     }

//     currentStreak = 1; // Reset for next group
//   }
// }

// console.log(`most repeated number consecutively is ${maxNum} and was repeated ${maxStreak} times`);

// if (secMaxNum !== null) {
//   console.log(`second most repeated number consecutively is ${secMaxNum} repeated also ${maxStreak} times`);
// }