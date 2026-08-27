# Write your Python code here
arr = [5,5,5,6,7,8]

i = 1

while i< len(arr):
    if arr[i] != arr[i-1]:
        print(arr[i])
        break;
        
    i+=1