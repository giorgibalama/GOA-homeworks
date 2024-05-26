from turtle import*

#we want to paint a house

#step one: draw a square
speed(10)
width(6)
forward(200)

left(90)
forward(200)
left(90)      

forward(200)
    
left(90)
forward(200)
left(90)

forward(70)
begin_fill()
color("red")
left(90)
forward(110)
right(90)
forward(60)
right(90)
forward(110)
end_fill()
# start roof
penup()

goto(200, 200)
pendown()
begin_fill()
color("red")
right(130)
forward(150)


left(90)
forward(127)
end_fill()
color("black")

left(35)
forward(60)
left(95)
color("brown")
forward(60)
left(90)
forward(45)
left(90)
forward(60)
penup()
goto(195, 135)
pendown()
forward(60)
right(90)
forward(45)
right(90)
forward(60)
penup()
goto(0, 160)
pendown()
forward(60)
penup()
goto(30, 140)
pendown()
left(90)
forward(45)
# drawing window2
penup()
goto(165, 140)
pendown()
forward(45)
penup()
goto(200, 160)
pendown()
left(90)
forward(60)


exitonclick()

































































exitonclick()