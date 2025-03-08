function findMax() {
    
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let num3 = prompt("Enter the third number:");
  
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
  
    let max = num1; 
  
    if (num2 > max) {
      max = num2;
    }
  
    if (num3 > max) {
      max = num3;
    }

    alert("The largest number is: " + max);
  }

  findMax();