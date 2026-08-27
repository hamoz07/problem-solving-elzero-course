# very easy
prompted = int(input("the number: "))
upto_multiplication = 12;
by = 1

if prompted == 1:
    print(f"{prompted} x {by} = {prompted * by}")
elif prompted < 1:
    print("please enter a non-negative number")
else:
    while by <= upto_multiplication:
        print(f"{prompted} x {by} = {prompted * by}")
        by+=1