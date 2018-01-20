'use strict';

const solution = module.exports = {};


solution.findMiddleNode = function(sll) {
  if(!sll) return null;

  var itrMid, itrEnd;

  for(itrEnd = sll; itrEnd; itrEnd = itrEnd.next) {
    if(typeof itrEnd !== 'object') return null;

    let key = Object.keys(itrEnd);
    if(key.length !== 2) return null;
  }


  for(itrMid = sll, itrEnd = sll; itrEnd.next && itrEnd.next.next; itrMid = itrMid.next, itrEnd = itrEnd.next.next);

  return itrMid;

};
