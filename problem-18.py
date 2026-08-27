name = input("name: ")

i = 0;

while i< len(name):
    if name[i] == 'a' or name[i] == 'A':
        print('*',end='')
    else:
        print(name[i],end='')
    i+=1;