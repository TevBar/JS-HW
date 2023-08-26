//! Content: Basic JS - Content: Basic data types, bindings, basic builtins, conditionals, 
//! control flow, loops, switch, functions

//? Comment highlighting: Name: Better Comments
//? VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

// Reading: EJS 1-4 https://eloquentjavascript.net/ 

//* Feel free to just log answers to the console - I should be able to just 
//* copy-paste your code into the console and run it to check answers 😎

// HW: 
//* 1. Cube Number Test
// Print out all cubed numbers up to the total value 1000. Meaning that if the cubed number is over 1000 break the loop.


let cubedNumber = 1;
while(Math.pow(cubedNumber, 3) <= 1000) {
    console.log(Math.pow(cubedNumber , 3));
    cubedNumber++;
}



//* 2. Prime Numbers
// Get first prime numbers up to 100

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  
  function printPrimesUpTo100() {
    for (let num = 2; num <= 100; num++) {
      if (isPrime(num)) {
        console.log(num);
      }
    }
  }
  
  printPrimesUpTo100();
  



//* 3. Age Question
// Take in a users input for their age, if they are younger than 18 log kids, 
//if they're 18 to 65 log adults, else log seniors

function determineAge(age){
    if(age < 18){
        return 'Kids';
    }else if( age >= 18 && age <= 65){
        return 'Adult'
    } else {
        return 'Senior';
    }
}

console.log(determineAge(66));







