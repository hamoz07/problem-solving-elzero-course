# my  solution: wrong , misunderstood the problem

name = "Hamza"
i = len(name)
u =1;
newname = []

# while i>=u:
#     # check length if 1
#         # print it
#     # if more mirroring should happen
#     # h should be a and a be z and then
#      # azmah
#      if u == 0 and u == i:
#       break;
#      else:
#          newname.append(name[i - u])
#      u+=1
         
     

for letter in list(name)[::-1]:
    newname.append(letter)
    
print("".join(newname))


# correct solution (elzero's)

# Easy ★★★☆☆☆☆☆☆☆
# Print Mirror Characters

txt = "Elzero"

i = 0  # First Element -> Index = 1

j = len(txt) - 1  # Last Element -> Index = 4

while i <= j:

    print(txt[i] + txt[j])

    i += 1

    j -= 1