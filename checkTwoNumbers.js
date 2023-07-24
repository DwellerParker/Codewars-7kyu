// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

function twoArePositive(a, b, c) {
    let map = [a, b, c];
    map = map.filter(n => n > 0);
  
    if (map.length === 2) {
      console.log("true");
    } else {
      console.log("false");
    }
  }