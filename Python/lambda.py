squared = lambda num : num * num
# def squared(num): return num * num

print(squared(2))

addTwo = lambda num : num + 2

print(addTwo(12))

sum_total = lambda a, b : a + b

print(sum_total(2,3))


def funcBuilder(x):
    return lambda num : num + x

addTen = funcBuilder(10)
addTwenty = funcBuilder(20)

print(addTen(7))
print(addTwenty(7))

# Higher order function

numbers = [3,7,12,18,20,21]

squared_nums = map(lambda num : num * num, numbers)

print(list(squared_nums))

# ---------------------------

odd_nums = filter(lambda num : num % 2 != 0, numbers)

print(list(odd_nums))

# ------------------------------

from functools import reduce 

numbers = [1,2,3,4,5,1]

total = reduce(lambda acc, curr: acc + curr, numbers, 10)

print(total)

print(sum(numbers, 10))



names = ["Dave Gray", "Sara Ito", "John Jacob Jingleheimerschmidt"]

char_count = reduce(lambda acc, curr : acc + len(curr), names, 0)

print(char_count)