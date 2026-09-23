let chars = "EL23Ref4s12v9K7oo10"
let i = 1
let res = []
while(i< chars.split("").length){
 if(!isNaN(chars[i]) && isNaN(chars[i - 1])){
  res.push(chars[i - 1])
 }
  i++
}

console.log(res.join(""))
//elzero's easier non-internal-function execution
let txt = "E112l1xdz1ddre23r4oo5xd";
let result = "";
let i = 0;

while (i < txt.length - 1) {
  let cur = txt[i];
  let nxt = txt[i + 1];

  if ((cur < "0" || cur > "9") && (nxt >= "0" && nxt <= "9")) {
    result += cur;
  }
  i++;
}

console.log(result); // "Elzero"