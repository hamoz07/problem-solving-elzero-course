# couldnt solve this problem on my own, so i had to look at the solution video and then try to enhance it to be dynamic
# attempt 1
name = input("Your name: ")

lengthplustwo = len(name)
i = 0
test = 0
j = 0

while i < 10:
    print("*",end="")
    i+=1
    
print(f"\n** {name.strip()} **")


while j < 10:
    print("*",end="")
    j+=1
    
# attempt 2
while test < 2:
    while j < lengthplustwo:
        print("*",end="")
        j+=1
    print(f"\n** {name.strip()} **")
    test+=1

# successful attempt (elzero's version enhanced by gemini to be dynamic as i was trying to do)

name = input("Your name: ")  # 16 characters

i = 1
border_length = len(name) + 6

while i <= 3:
    if i == 2:
        print("** " + name + " **")
    else:
        print("*" * border_length)
    i += 1