// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

function solution(str, ending){
 let number = str.length
 let original = str.split('').splice( number - (ending.length)).join('')
 return original === ending
}