'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  // while (array.length > 1) {
  // 	const middle = Math.floor(array.length / 2);
  // 	if (array[middle] === target) {
  // 		return true;
  // 	} else if (target < array[middle]) {
  // 		array = array.slice(0, middle);
  // 	} else {
  // 		array = array.slice(middle);
  // 	}
  // }
  // return array[0] === target;
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    console.log('start', start);
    console.log('end', end);
    let middle = Math.floor((end - start) / 2) + start;
    if (array[middle] === target) {
      return true;
    } else if (target < array[middle]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return array[start] === target;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
