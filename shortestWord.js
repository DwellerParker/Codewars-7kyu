// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let shortWord = s.split(' ').map(x => x.length);
    shortWord = shortWord.sort((a,b) => a-b);
    shortWord = shortWord[0]
    return shortWord
  }