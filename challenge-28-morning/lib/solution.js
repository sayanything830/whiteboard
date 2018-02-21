'use strict';

module.exports = function high(string){
  let words = string.split(' ');
  let max = 0;
  let result = '';
  for(let i = 0; i < words.length; i++){
    let s = words[i];
    let val = 0;
    for(let j = 0; j < s.length; j++){
      val += (s.charCodeAt(j) - 90);
    }
    if(val > max){
      max = val;
      result = s;
    }
  }
  return result;
};

