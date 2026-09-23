# my solution in js
let arr = [1,1,3,5,4,2,5]
let noDups = []

for(num of arr){
  if(!noDups.includes(num)){
  noDups.push(num)
  }
}

console.log(noDups)

# ai's recommended faster solution in js

let noDups = [...new Set(arr)];

# my solution in py

ar = [34,5,4,3,5,34]
noDups = []

for num in ar:
    if num not in noDups:
        noDups.append(num)
print(noDups)