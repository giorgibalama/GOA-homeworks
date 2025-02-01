let number = prompt("Enter a number:");

if (number % 2 == 0) {
  alert("Even");
} else {
  alert("Odd");
}


let temperature = prompt("Enter temperature in Celsius:");

if (temperature < 10) {
  alert("Cold");
} else if (temperature >= 10 && temperature <= 25) {
  alert("Moderate");
} else {
  alert("Hot");
}


let score = prompt("Enter your score (0-100):");

if (score >= 90 && score <= 100) {
  alert("A");
} else if (score >= 80 && score < 90) {
  alert("B");
} else if (score >= 70 && score < 80) {
  alert("C");
} else if (score >= 60 && score < 70) {
  alert("D");
} else {
  alert("F");
}



