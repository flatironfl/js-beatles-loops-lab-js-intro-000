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