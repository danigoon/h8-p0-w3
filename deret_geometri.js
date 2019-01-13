function tentukanDeretGeometri(arr) {
  var anchor = 0;
  var counter = 0;

  if (arr[0] % 2 === 0) {
    anchor = arr[1] / arr[0];
  }
  else {
    anchor = arr[1];
  }
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] * anchor === arr[i+1]) {
      // console.log(arr[i] + ' <== i')
      // console.log(arr[i+1] + ' equal ', arr[i] + anchor )
      counter++;
    }
    else {
      counter--;
      // console.log(arr[i] + ' <== i')
      // console.log(arr[i+1] + ' not equal', arr[i] + anchor)
    }
  } 
  
  if (counter === arr.length - 1) {
    return true
  }
  else {
    return false
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false