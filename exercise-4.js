function dataHandling2(strArr) {
  strArr.pop(); // menghapus 'Membaca' dari array
  strArr.push('pria'); // menambahkan 'pria' padan array di indeks terakhir
  strArr.push('SMA Internasional Metro'); // menambahkan 'SMA InternasionaL Metro' padan array di indeks terakhir
  strArr.splice(1,1, 'Roman Alamsyah Elsharawy'); //
  console.log(strArr);
  var date = strArr[3].split('/')

  switch (date[1]) {
    case '01':
      console.log('Januari');
      break;
    case '02':
      console.log('februari');
      break;
    case '03':
      console.log('Maret');
      break;
    case '04':
      console.log('April');
      break;
    case '05':
      console.log('Mei');
      break;
    case '06':
      console.log('Juni');
      break;
    case '07':
      console.log('Juli');
      break;
    case '08':
      console.log('Agustus');
      break;
    case '09':
      console.log('September');
      break;
    case '10':
      console.log('Oktober');
      break;
    case '11':
      console.log('November');
      break;
    case '12':
      console.log('Desember');
      break;
  }
date[1]


console.log(date.sort(function(value1, value2) {return value2 - value1}));

console.log(date.join('-'));

var nama = strArr[1].split(' ')
nama = nama.slice(0,2)
console.log(nama.join(' '));

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
