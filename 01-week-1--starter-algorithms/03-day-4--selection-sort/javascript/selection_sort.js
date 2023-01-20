function selectionSort(arr) {
  
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-14, -5, 0, 8, 10, 20]");
  console.log("=>", selectionSort([10, -14, -5, 20, 8, 0]));

  console.log("");

  console.log("Expecting: [-1, -1, -0.5, 2, 4.5, 5, 10.5]");
  console.log("=>", selectionSort([-1, 4.5, -0.5, -1, 5, 2, 10.5]));

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; i++) {
    selectionSort([2,1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);

}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution


// Use a for loop iterating over the input array
// A conditional checks the whole array for the lowest value
// Once found, the smallest number is placed at the front of the array
// The next iteration moves to the next index and checks the whole array for the smallest value
// Once the loop finishes iterating through the array, it returns the array from smallest to largest values