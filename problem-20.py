nums = [1,2,4,8,16,8]

numbers = [5,3,4,8,16,8]

i = 0

repeated = []



while i < len(nums):
    j = 0

    while j < len(numbers):
        if nums[i] == numbers[j]:
            repeated.append(nums[i])

        j+=1

    i+=1

    

print(repeated)

#corrected solution by ai

# list1 = [1, 2, 3, 3, 4]
# list2 = [3, 4, 4, 5, 6]
# common = []

# i = 0
# while i < len(list1):
#     j = 0  # Reset j to 0 for every element in list1
    
#     while j < len(list2):  # Scan through the entire list2
#         if list1[i] == list2[j]:
#             # Only append if the number isn't already in common
#             if list1[i] not in common:
#                 common.append(list1[i])
#             break  # Match found, skip checking the rest of list2 for list1[i]
#         j += 1
        
#     i += 1

# print(common)  # Output: [3, 4]