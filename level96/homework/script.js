let sec = 0;

function startTimer() {
  setInterval(() => {
    console.log( sec,  "seconds have been passed");
    sec++;
  }, 1000);
}

startTimer();

//-------------------------------------------------------------

function Random() {
    setInterval(() => {
      console.log(Math.random());
    }, 1000);
  }
  
  Random();
  
  //-------------------------------------------------------

  function greet() {
    setTimeout(() => {
      console.log("Hello!");
    }, 2000); 
  }
  
  greet();
  