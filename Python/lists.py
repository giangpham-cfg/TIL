user = ["giang", "James", "noah"]

print("giang" in user)
user.append("coco")
print(user)

user += ["kaka", "tom"]
print(user)

user.extend(["tenten"])
print(user)

user.insert(0, "bob")
print(user)

user[1:1] = ["hong"]
print(user)

user[1:2] = ["tham"]
print(user)

user.remove("bob")
print(user)

print(user.pop())
print(user)

del user[0]
print(user)

user.sort(key=str.lower)
print(user)

# make a copy of list
usercopy = user.copy()
myuser = list(user)
mycopy = user[:]


print(usercopy)
usercopy.sort()
print(usercopy)
print(myuser)
print(mycopy)
print(user)
