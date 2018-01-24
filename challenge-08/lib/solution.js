'use strict';

const SLL = require('./sll.js');


module.exports = function(sll1, sll2) {
  let table = {};
  let resultList = new SLL();
  let currentNode = arr.head;
  while (currentNode) {  //Big O is O(n)
    table[currentNode.value] = true;
    currentNode = currentNode.next;
  }
  currentNode = arr1.head;
  while (currentNode) {  //Big O is O(n)
    if (table[currentNode.value]) {
      resultList.insertEnd(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  console.log(resultList);
  return resultList;
}

//   let table = {};
//   let resultList;
//   let curr = sll1.head;
//   let list = new SLL()

//   while(curr) {
//     if(!table[curr.value]) table[curr.value] = true;
//     curr = curr.next;
//   }

//   curr = sll2.head;
//   while(curr) {
//     if(table[curr.value]){
//       //add current node to constructor and add to resultList
//       // list(curr)
//     }
//     curr = curr.next;
//   }
//   return resultList;
// }



let test = new SLL();
test.insertEnd(9);
test.insertEnd(5);
test.insertEnd(7);

let test1 = new SLL();
test1.insertEnd(5);
test1.insertEnd(2);
test1.insertEnd(7);


// doThing.testNode = function(arr, arr1) {
//   let table = {};
//   let resultList = new SLL();
//   let currentNode = arr.head;
//   while (currentNode) {  //Big O is O(n)
//     table[currentNode.value] = true;
//     currentNode = currentNode.next;
//   }
//   currentNode = arr1.head;
//   while (currentNode) {  //Big O is O(n)
//     if (table[currentNode.value]) {
//       resultList.insertEnd(currentNode.value);
//     }
//     currentNode = currentNode.next;
//   }
//   console.log(resultList);
//   return resultList;
// };