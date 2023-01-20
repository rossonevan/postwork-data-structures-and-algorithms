function findShortestString(arr) {
  let shortStr = arr[0];

  arr.forEach( string => {
    if (string.length < shortStr.length) {
      shortStr = string;
    }
  });

  return shortStr;

  // Shorter Version
    // return arr.reduce((shortStr, string) => 
    // string.length < shortStr.length ? string : shortStr)

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'Tom'");
  console.log("=>", findShortestString(['Tom', 'Bill']));

  console.log("");

  console.log("Expecting: 'q'");
  console.log("=>", findShortestString(['q']));

  console.log("");
  
  // BENCHMARK HERE

  const startTime = Date.now();

  for (let i = 0; i < 1000; i++) {
    findShortestString(['flower', 'juniper', 'lily', 'dandelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;

  console.log(avgTime);

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
