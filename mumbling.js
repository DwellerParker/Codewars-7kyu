// This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
    const arr = s.toUpperCase().split('');
    
    for(let i = 0; i < arr.length;i++){
      arr[i] += arr[i].repeat(i).toLowerCase()
    }
    
    return arr.join('-')
  }