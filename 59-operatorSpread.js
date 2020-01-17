//operator spread
//biasa digunakan untuk keperluan yang berhubungan dengan array
//operator spread ditulis dengan titik 3 kali ...

var angka1 = [1, 2, 3, 4]; //variable angka1 yang berisi array 1-4
var angka2 = [5, 6, 7, 8, 9, 10]; //variable angka2 yang berisi array 5-10


var gabung = [...angka1, ...angka2]; //menggabungkan array dengan operator spread
var gabung2 = [...angka1, ...angka2, 11, 12, 13]; //kita juga bisa menambah isi array ketika menggabngkan dengan operator spread, seperti di samping kita menambah 11,12,13

console.log("ini contoh membuat operator spread", gabung);
console.log("Ini contoh menambah isi array saat membuat operator spread", gabung2)