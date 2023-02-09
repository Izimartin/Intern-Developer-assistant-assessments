/*
Author: Martins Akhivbareme
Date: February 9, 2023
Description: Solution to Problem #0 for ALX SE Intern Developer assistant - assessments.
*/

function findX(n, isTooSweet) {
  // Initialize the low and high values for the binary search range
  let low = n;
  let high = n * 2;

  // Keep looping as long as the low value is less than the high value
  while (low < high) {
    // Calculate the midpoint of the current range
    let mid = Math.floor((low + high) / 2);

    // Check if the midpoint value makes the cake too sweet
    if (isTooSweet(mid)) {
      // If the cake is too sweet, update the high value to be the midpoint - 1
      high = mid;
    } else {
      // If the cake is not too sweet, update the low value to be the midpoint + 1
      low = mid + 1;
    }
  }

  // Return the final low value, which is the first number of teaspoons of sugar that will make the cake too sweet
  return low;
}
