fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print(fruits)

print(fruits[0])
print(fruits[-1])

fruits.append("fig")
print(fruits)

fruits.remove("banana")
print(fruits)

fruits[1] = "blueberry"
print(fruits)

print(len(fruits))











numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

numbers.append(100)
numbers.insert(0, 5)
numbers.remove(30)
numbers.sort()
numbers.reverse()

index_50 = numbers.index(50)
count_20 = numbers.count(20)

print(numbers)
print( index_50)
print( count_20)
