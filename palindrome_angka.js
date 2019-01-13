function angkaPalindrome(num) {
  // you can only write your code here!
  var newNum = num + 1;
  var newStr = '';
  for (var i = newNum; i > num; i++) {
    var str = '' + i;
    for (var j = str.length - 1; j >= 0; j--) {
      newStr += str[j]
    }
    console.log(newStr)
    if (str === newStr) {
      return str
    }
  }
}

// TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001