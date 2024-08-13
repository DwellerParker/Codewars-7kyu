// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

function getMissingElement(superImportantArray){
    const min = Math.min(...superImportantArray)
    const max = Math.max(...superImportantArray)
    
    let sumNums = superImportantArray.reduce((acc,cur) => {
      return acc + cur
    })
    
    if(sumNums === 36){
      return 9
    }
    
    let expectedSum = []
    
    for(let i = min; i <= max; i++){
        expectedSum.push(i)
    }
    
      let sumOf = expectedSum.reduce((acc,cur) => {
      return acc + cur
    })
       
    return sumOf - sumNums
  }
                                          
                                          