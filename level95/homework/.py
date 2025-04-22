import random

def random_person():
    person = ["giorgi", "davit", "elene", "nika", "andria", "barbare", "tamari"]
    randomguy = random.choice(person)
    print(f"the person who is gonna pay is {randomguy}")
random_person()

