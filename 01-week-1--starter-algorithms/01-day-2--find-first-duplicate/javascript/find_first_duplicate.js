function findFirstDuplicate(arr) {
  // If an value is repeated, return that value and end the loop

    // Create a new array using the Set method to compare existing values to the input array values
    let newArr = new Set();

    // Create a for loop iterating over the length of the array
    for (let i = 0; i < arr.length; i++) {
      // Condition that checks if any value of the input array is contained in the Set array
      if (newArr.has(arr[i]))
        // If the Set array already contains the same value, return the duplicate value
        return arr[i];
        // If the value is not a duplicate, add the value into the Set array and continue looping through the array
        newArr.add(arr[i]) 
    }

    // If there are no duplicates, return -1
    return -1

  }
  

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: 40")
  console.log("=>", findFirstDuplicate([10, 20, 30, 40, 50, 40, 30, 20, 10]));

  console.log("Expecting: -8")
  console.log("=>", findFirstDuplicate([-10, -8, -4, 4, 8, 10, -1, 1, -8, -4, -10]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Create a for loop