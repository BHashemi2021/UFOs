console.log("Hello World!");

console.log("This is another line."); 


// Addition function
function addition(a, b) {
    return a + b;
 }
 console.log(addition(44, 50));


//  // Functions can call other functions
 function doubleAddition(c, d) {
   var total = addition(c, d) * 2;
   return total;
 }
console.log(doubleAddition(65, 34));



// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }
  

//  Addition function converted to an arrow function (fat arrow function)
addition = (a, b) => a + b;

// Changing doubleAddition function to a fat arrow function
doubleAddition = (c, d) => addition(c, d) * 2;



