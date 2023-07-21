// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    numbers = numbers.split(' ');
    numbers = numbers.map((x) => Number(x))
    numbers = numbers.sort( (a,b) => b - a)
    return `${numbers[0]} ${numbers[numbers.length - 1]}`
  }