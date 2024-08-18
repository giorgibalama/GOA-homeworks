# 1.Get User Input: Prompt the user to enter their weight (in kilograms) and height (in meters).



weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (m): "))

bmi = weight / height**2


if bmi < 25:
    print(" You are below the normal range.")
elif bmi < 30:
    print(" You are within the normal range.")
elif bmi < 35:
    print(" You are above the normal range.")
else:
    print(" You are obese.")



  