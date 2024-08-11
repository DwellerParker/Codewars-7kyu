// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

function myLanguages(results) {
    const arraySet = Object.entries(results);
    const filterOut = arraySet.filter(([language,score]) => score >= 60);
    const sortOut = filterOut.sort((a,b) => b[1] - a[1])
    const mappedOut = sortOut.map(([a,b]) => a)
    return mappedOut
  }
  
  