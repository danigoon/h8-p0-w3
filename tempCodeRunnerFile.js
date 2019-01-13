var i = num;
  var stringNum = i.toString();
  while (true) {
    for (var j = stringNum.length - 1; j >= 0; j--) {
      var reverseNum = '';
      reverseNum += stringNum[j];
      
      if (reverseNum == i) {
        return reverseNum;
      }
      else {
        i++;
      }
    }
  }