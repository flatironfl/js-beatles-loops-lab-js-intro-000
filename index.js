function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var whoPlaysWhat = [];
  
  for (var i = 0; i < musiciansArray.length; i++) {
    whoPlaysWhat.push('${musiciansArray[i]} plays ${instrumentsArray[i]');
  }
  return whoPlaysWhat;
}