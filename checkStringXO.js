// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let array = str.toLowerCase().split("");
    let xCount = 0;
    let oCount = 0;
  
    for(let key of array){
        if(key === "x" ){
         xCount += 1
        }else if(key === "o"){
          oCount += 1
        }
    }
  
    if(xCount !== oCount){
      return false
    }else{
      return true
    }
}