numberoftimes= int(input("how many do you want to print your name: "))

if numberoftimes == 0:
    print("0 is invalid");
    
else:
    yourname = input("your name: ")

    if numberoftimes <=2:
        print("Welcome,",yourname)
    else:
    # loop
        i = numberoftimes
        while i >= 2:
            print("Welcome,",yourname)
            i-=1;

#! enhanced after video

numberoftimes= int(input("how many do you want to print your name: "))

if numberoftimes < 1:
    print(f"{numberoftimes} is invalid");
else:
    yourname = input("your name: ")

    if numberoftimes > 2:
        i = numberoftimes
        while i >= 2:
            print("Welcome,",yourname)
            i-=1;
    else:
        print("Welcome,",yourname)