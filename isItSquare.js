// Given an integral number, determine if it's a square number:

let isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)) ? true : false;
   }