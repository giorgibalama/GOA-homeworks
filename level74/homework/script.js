let dayNumber = prompt("Enter a number between 1 and 7:");

switch (dayNumber) {
  case "1":
    alert("Monday");
    break;
  case "2":
    alert("Tuesday");
    break;
  case "3":
    alert("Wednesday");
    break;
  case "4":
    alert("Thursday");
    break;
  case "5":
    alert("Friday");
    break;
  case "6":
    alert("Saturday");
    break;
  case "7":
    alert("Sunday");
    break;
  default:
    alert("Invalid day");
}


let weather = prompt("Enter a number between 1 and 4: ");

switch (weather) {
  case "1":
    console.log("Sunny");
    break;
  case "2":
    console.log("Rainy");
    break;
  case "3":
    console.log("Cloudy");
    break;
  case "4":
    console.log("Windy");
    break;
  default:
    console.log("Not defined");
}

