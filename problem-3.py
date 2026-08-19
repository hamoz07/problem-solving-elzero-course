# problem 3 (my solution)
nums = [7,3,5,6,9,11,-1,18,19,20,2];
# check a number and have it as the i
smallestnum = nums[0];
i = 1
while i < len(nums):
    if nums[i] < smallestnum:
        smallestnum = nums[i]
        
    i+=1
    
print(smallestnum)