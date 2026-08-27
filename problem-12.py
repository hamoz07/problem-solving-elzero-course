nums = [10,20,40,30,110,80,90,100,70,60]

i = int(input("how many latest numbers do you wanna show from the list: "));
if i < 1:
    print("number has to be 1 or more")
elif i > 1:
    while i >= 1:
        print(nums[len(nums) - i])
        i-=1
else:
    print(nums[len(nums) - 1])

# cleaner (by gemini):

nums = [10, 20, 40, 30, 110, 80, 90, 100, 70, 60]
count = int(input("How many latest numbers do you wanna show from the list? "))
if count < 1 or count > len(nums):
    print(f"Please enter a number between 1 and {len(nums)}")
else:
  while count >= 1:
        print(nums[-count])
        count -= 1