function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var whoPlaysWhat = [];
  
  for (var i = 0; i < musiciansArray.length; i++) {
    whoPlaysWhat.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  
  // assumes factsArray not empty
  while (i < factsArray.length) {
    factsArray[i] = `${factsArray[i]}!!!`;
    i++;
  }
  
  return factsArray;
}

function iLoveTheBeatles(num) {
  var retArray = [];
  
  do {
    retArray.push("I love the Beatles!");
    // could do num++ here instead of in loop condition test
  } while (++num < 15); // inc num BEFORE using it in comparison
  
  return retArray;
}