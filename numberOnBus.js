// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 

let number = function(busStops){
    let peopleOn = 0;
    let peopleOff = 0;
    for(let people of busStops){
      peopleOn += Number(people[0])
      peopleOff += Number(people[1])
    }
    const result = peopleOn -peopleOff
    return result
  }