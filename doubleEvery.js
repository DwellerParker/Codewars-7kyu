// Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
    let array = []
    for(let i = 0; i < a.length; i ++){
      if(i % 2 === 0){
         array.push(a[i])
         }else {
           array.push(a[i]* 2)
         }
    }
    return array
  }