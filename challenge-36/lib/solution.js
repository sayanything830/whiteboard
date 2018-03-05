'use strict';

const isStructureIdentical = module.exports = function(tOne, tTwo) {
  // -- validate -- //
  if(typeof tOne === 'number' || typeof tOne === 'string' || Array.isArray(tOne)) return null;
  if(typeof tTwo === 'number' || typeof tTwo === 'string' || Array.isArray(tTwo)) return null;

  if(!tOne && !tTwo) return true;
  if(!tOne || !tTwo) return false;

  if(tOne && tTwo) return (isStructureIdentical(tOne.left, tTwo.left) && isStructureIdentical(tOne.right, tTwo.right));

  return false;
};
