# initial code (accourding to gemini's understanding of problem title): so solved it correctly
word = "React"
i=0;
while i < len(word):
    print(word[i],word[i+1],sep="")
    i+=1
# correction after video sol. (index out of range error):
i=1;
while i < len(word):
    print(word[i - 1],word[i],sep="")
    i+=1
# video code/required output's code:
word = "hello"
i=0;
while i < len(word):
    if i+1 < len(word):
        print(word[i],word[i+1],sep="")
    else:
        print(word[i])
    i+=2
# gemini's solutions:
# sol.1:
for i in range(len(word) - 1): print(word[i] + word[i+1]) 
# sol.2:
for i in range(0, len(word), 2):
    print(word[i:i+2])