# my sol:
i = 1;
while i<=20:
    if i / 5 == 4:
        print(i)
        break;
    if i % 5 != 0:
        print(i)
    i+=1    
#elzero's sol.:
i = 1;
while i<=20:
    if i == 20:
        print(i)
        # break;
    if i % 5 == 0:
        i+=1
        continue;
    print(i)
    i+=1    