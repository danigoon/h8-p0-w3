function tentukanDeretAritmatika(arr) {
  var anchor = arr[1] - arr[0];
  var counter = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + anchor === arr[i+1]) {
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
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false