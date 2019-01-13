function groupAnimals(animals) {
  var arr = [];
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < alfabet.length; i++) {
    var tempArr = [];
    for (var j = 0; j < animals.length; j++) {
      // console.log(animals[j][0])
      if (animals[j][0] === alfabet[i]) {
        tempArr.push(animals[j]);
      }
    }
    if (tempArr.length !== 0) {
      arr.push(tempArr)
    }
  }
  return arr
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]