// my solutions
// way 1
words = ['haha','dog','max','maxwell','frizzy','buckled']

over3 = []

for(word of words){
  if(word.length > 3){
    over3.push(word)
  }
}

console.log(over3)

// way2
i = 0

while (i < words.length){
  if(words[i].length > 3){
    console.log(words[i])
  }
    i++
}