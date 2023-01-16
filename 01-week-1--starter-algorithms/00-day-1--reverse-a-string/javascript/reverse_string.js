
function reverseString(str) {
  // Initialize a new string output
  let newStr = "";

  // Create a for loop that will find the last letter of the input string
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each letter iteration to the new string variable
    newStr = newStr + str[i]
  }

  //Return the reversed string
  return newStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// The function takes in a string. It then creates a new empty string
// where the newly reversed string will be placed into. A for loop was created
// to iterate from the end of the input string in a reverse order.
// The loop finds the length of the string and then subtracts 1 letter from the end,
// grabbing the last letter of the string and placing that letter into the new string variable.
  // Ex. str = "hi", newStr =""
    // First iteration: str[1] = "i", newStr = "" + "i" = "i"
    // Second iteration str[0] = "h", newStr = "i" + "h" ="ih"
// Once i = 0, the loop stops and returns the new string variable.