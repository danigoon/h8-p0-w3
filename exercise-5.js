//Palindrome

function palindrome(kata) {
  var balik_kata = ''
  for (var i = kata.length -1; i >= 0; i--) {
    balik_kata += kata[i]
  }

  if (balik_kata === kata) {
    return true
  }
  else {
    return false
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
