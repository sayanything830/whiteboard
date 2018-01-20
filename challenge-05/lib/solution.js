'use strict';

const solution = module.exports = {};


solution.findMiddleNode = function(sll) {
  var itrMid, itrEnd;

  for(itrMid = sll, itrEnd = sll; itrEnd.next && itrEnd.next.next; itrMid = itrMid.next, itrEnd = itrEnd.next.next);

  return itrMid;

};
