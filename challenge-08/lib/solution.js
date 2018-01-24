'use strict';

module.exports = function(sll1, sll2) {
  let table = {};
  let resultList;
  let curr = sll1.head;
  let list = new SLL()

  while(curr) {
    if(!table[curr.value]) table[curr.value] = true;
    curr = curr.next;
  }

  curr = sll2.head;
  while(curr) {
    if(table[curr.value]){
      //add current node to constructor and add to resultList
      // list(curr)
    }
    curr = curr.next;
  }
  return resultList;
}