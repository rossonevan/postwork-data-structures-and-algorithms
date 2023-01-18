function fibonacci(num) {
  
  let a = 0, b = 1, newSum;

  while (num >= 0) {
    newSum = a;
    a = a + b;
    b = newSum;
    num--;
  }

  return b

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 6765");
  console.log("=>", fibonacci(20));

  console.log("");

  console.log("Expecting: 21");
  console.log("=>", fibonacci(8));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
