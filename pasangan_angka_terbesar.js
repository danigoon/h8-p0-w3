function pasanganTerbesar(num) {
  var strNum = '';
  var arr = [];
  strNum += num;

  for (var i = 0; i < strNum.length - 1; i++) {
    arr.push(strNum[i] + strNum[i+1]);
  }
    var arrSort = arr.sort();
    return arrSort[arrSort.length - 1]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99