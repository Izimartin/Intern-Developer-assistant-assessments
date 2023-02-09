/*
Author: Martins Akhivbareme
Date: February 9, 2023
Description: Solution to Problem #2 for ALX SE Intern Developer assistant - assessments.
*/

function maxPower(fields, towers) {
  // Sort the towers array in ascending order.
  towers.sort((a, b) => a - b);

  // Initialize the maximum distance between a field and a tower to 0.
  let maxDistance = 0;

  // Iterate through each field.
  for (let field of fields) {
    // Find the closest tower to the field by using binary search.
    let tower = binarySearch(towers, field);

    // Update the maximum distance between a field and a tower by taking the maximum of the current maximum distance and the difference between the field and the closest tower.
    maxDistance = Math.max(maxDistance, Math.abs(field - tower));
  }

  // Return the maximum distance between a field and a tower.
  return maxDistance;
}

// A helper function to find the closest tower to the field by using binary search.
function binarySearch(towers, field) {
  let left = 0,
    right = towers.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (towers[mid] < field) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return towers[left];
}
