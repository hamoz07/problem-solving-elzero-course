numbers = [5,3,4,9,20,30,2,2]
count = 0;
i = 1
while i < len(numbers):
    if numbers[i] % 2 == 0 and numbers[0] < numbers[i]:
        count+=1;
        print(numbers[i])
    i+=1;

print(count)