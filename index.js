function theBeatlesPlay(musiciansArray, instrumentsArray){
  var emptyArray = [];
  for (var i = 0; i < musiciansArray.length; i++){
    emptyArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return emptyArray;
}



function johnLennonFacts(factsArray){
  var key = 0;
while(factsArray.length > key){
    factsArray[key] = factsArray[key] + "!!!";
    key++
}
return factsArray
}


function iLoveTheBeatles(num){
  var emptyArray = []
  let i=0;
  do {
  emptyArray.push("I love the Beatles!")
  i++;
  }
  while (arr.length>i);
}