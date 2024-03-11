function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Check if the sum of current pair equals the target
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false; 
}
/* 
  Write the Big O time complexity of your function here
*/
/* 
  Time Complexity: O(n^2) - where n is the length of the input array. 
  This is because we are iterating over the array twice with nested loops.
*/

/* 
  Add your pseudocode here
*/
/* 
   1. Iterate over each element in the array using a loop.
   2. For each element, iterate over the remaining elements in the array using another loop.
   3. Check if the sum of the current element and any other element equals the target.
   4. If a pair is found, return true.
   5. If no pair is found after exhausting all possibilities, return false.
   */
  
  /*
    Add written explanation of your solution here

    The function iterates through each element in the array and checks if there's another element in the array that, when added to the current element, equals the target sum. It does this by using nested loops. If such a pair is found, it returns true, indicating that the target sum is achievable with elements from the array. If no such pair is found after checking all possible combinations, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here



  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>",hasTargetSum([-7, 10, 4, 8],3));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log("=>",hasTargetSum([1, 2, 3, 4],5));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>",hasTargetSum([2, 2, 3, 3],4));

  console.log("Expecting: false");
  console.log("=>",hasTargetSum([4],4));

  
}


module.exports = hasTargetSum;
