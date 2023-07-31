// Write a function that returns both the minimum and maximum number of the given list/array. 

function minMax(arr){
    let result = arr.sort((a,b) => a-b)
    return [result[0],result[result.length - 1]];
  }