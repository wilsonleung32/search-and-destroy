'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let node = linkedlist.head;
  const map = {};
  while (node) {
    if (map[node.value]) {
      return true;
    } else {
      map[node.value] = true;
      node = node.next;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
