fromtoInput = int(input("choose a number: "))
i = fromtoInput
while i >= 1:
    print(i)
    i-=1
# another solution
for i in range(fromtoInput,0,-1):
    print(i)