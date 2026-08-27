number = int(input("your odd number: "))

total = 1;

if number % 2 != 0:
    if number == 3:
        print("3 is unsumable here, so sum result is 1")
    elif number == 1:
        print("nothing to sum, so sum result is: 1")
    else:
        remaining = number
        while remaining >= 1:
            remaining-=2;
            if remaining == 3:
                continue;
            total+=remaining
        print(total)
else:
    print("please enter an odd number")
    exit()

# cleaner sol. by gemini:
n = int(input("Enter Your Number: "))

i = 0
total = 0

while i < n - 1:
    i += 1

    if i % 2 == 0 or i == 3:
        continue;

    total += i

print(total)
# cleaner sol. by elzero:
n = int(input("Enter Your Number: "))

i = 1
total = 0

while i < n:


    if i % 2 != 0 and i != 3:
        total += i
        
    i += 1
print(total)