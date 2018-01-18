'use strict';

const train = module.exports = {};

let car = 0;
let passenger = 0;

train.passengerCount = function(obj) {
  if(!obj || typeof obj !== 'object' || Object.keys(train).length === 0) return null;

  car = obj;
  if(car.next === null) {
    console.log(car.value);
    passenger = passenger + car.value;
    console.log(passenger);
  }
  while(car.next) {
    console.log(car.value);
    passenger += car.value;
    car = car.next;
    train.passengerCount(car);
  }
  if(car.next === null) return passenger;
};
