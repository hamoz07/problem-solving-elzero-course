# (very easy)

# problem 1
# solution 1 (my sol.)
# prompt = int(input("Enter a number: "))

# first case: number might be decimal so need to round it to a solid integar number
# second case: its just an integar
# third case its 1 or less than 1
# total = 0;
# for i in range(1,prompt+1):
#     total+=i;
# print(total)

# solution 2 (after sol. vid.):
n = int(input("Enter a number: "))
total = 0
j = 0

while j <n:
    j+=1
    total+=j
print(total)