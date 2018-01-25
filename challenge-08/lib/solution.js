
'use strict';

const SLL = require('./sll');


module.exports = function(sll1, sll2) { //Big O: worst case O(n), iterates through lists twice, but not nested

  // invalid entries
  if (!sll1 || !sll2 || typeof sll1 !== 'object' || typeof sll2 !== 'object') return null;

  let table = {}; // will pe fill with first list
  let resultList = new SLL(); // new linked list
  let currentNode = sll1.head; // pointer for list one

  // Creates object based on first list's values
  while (currentNode) {  //Big O is O(n)
    table[currentNode.value] = true;
    currentNode = currentNode.next;
  }
  // pointer now on list two
  currentNode = sll2.head;

  // iterates through second list and checks if value exists in object 'table'
  while (currentNode) {  //Big O is O(n)
    if (table[currentNode.value]) { // if value is in table, add to new list
      resultList.insertEnd(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  // Return new list
  return resultList;
};