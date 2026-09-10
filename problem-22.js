let yourname = prompt("Name and numbers included: ")
let total = 0
// for(character of yourname.split("")){
//   if(!isNaN(character)) total+= +character
// }

// console.log(total)

// enhanced solution after elzero's recommendation to get it to the next level:
// let i = 0

// while (i < yourname.length){

//   if(i == yourname.length - 1) break;

//   if(Number(yourname[i]) && Number(yourname[i+1]) || Number(yourname[i]) && yourname[i+1] == '0'){

//     let thatNum = `${yourname[i]}${yourname[i+1]}`

//     total+= +thatNum

//   }else if(!isNaN(yourname[i])) {total+= +yourname[i]}

//   i++

// }

// by the help of ai realized my mistake and solved it for 2-digit Number but not more:
// let i = 0
// while (i < yourname.length){
//   if(Number(yourname[i]) && Number(yourname[i+1]) || Number(yourname[i]) && yourname[i+1] == '0'){
//     let thatNum = `${yourname[i]}${yourname[i+1]}`
//     total+= +thatNum;
//     i+=2
//     continue;
//   }else if(!isNaN(yourname[i])) {total+= +yourname[i]}
//   i++
// }

// console.log(total)

// correct solution if want it to calculate more than 2-digit Numbers (by ai):
// while (i < yourname.length) {
//   if (yourname[i] >= '0' && yourname[i] <= '9') {
//     let numStr = "";
//     // This inner loop advances the same counter 'i'
//     while (i < yourname.length && yourname[i] >= '0' && yourname[i] <= '9') {
//       numStr += yourname[i];
//       i++; 
//     }
//     total += Number(numStr);
//   } else {
//     i++;
//   }
// }

// console.log(total);

// ai's recommended faster solution
// let matches = yourname.match(/\d+/g) || [];
// let total = matches.reduce((sum, num) => sum + Number(num), 0);

// console.log(total);