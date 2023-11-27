import math
first = 'giang'
last = 'pham'

# print(type(first))
# print(type(first)) == str
# print(isinstance(first, str))

# pizza = str("Pepperoni")
# print(type(pizza))
# print(type(pizza) == str)
# print(isinstance(pizza, str))

fullname = first + " " + last
print(fullname)

multiline = '''
Hey, how are you?

I was just checking in.

                            All good?

'''
print(multiline)
print(multiline.title())
print(multiline.replace("good", "ok"))
print(len(multiline))
multiline += "                 "
multiline = "            " + multiline
print(len(multiline))
print(len(multiline.strip()))
print(len(multiline.lstrip()))
print(len(multiline.rstrip()))

print("")

title = "menu".upper()
print(title.center(30, "."))
print("cake".ljust(20, ".") + "2$".rjust(4))

print(first[0])
print(first[1])
print(first[-1])
print(first[0:-1])
print(first[0:])
print(first.endswith("g"))

myvalue = False
