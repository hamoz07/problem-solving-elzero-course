#! my thinking process:
#create a variable to push all items found to
# go through each item using a loop
 # check if its iterable or not
    # if so start iterting to push to main array
    # if not push the item to main 

myArr = [1,4,5,6,[5,9,[10,12]],[34,5],0,3]

def flattenIt(array):
    i = 0;
    arr = []
    while i < len(array):
        # is item iterable create another nested loop dynamically
        if isinstance(array[i],list):
            print('True')
        i+=1

flattenIt(myArr)