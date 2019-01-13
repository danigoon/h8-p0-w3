function dataHandling(strArr) {
  for (var i = 0; i < strArr.length; i++) {
    console.log('Nomor ID; ' + strArr[i][0]);
    console.log('Nama Lengkap: ' + strArr[i][1]);
    console.log('TTL: ' + strArr[i][2] + ', ' +strArr[i][3]);
    console.log('Hobi: ' + strArr[i][4]);
    console.log('\n');
  }

}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

dataHandling(input)
