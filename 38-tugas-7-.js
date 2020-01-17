//Buatlah sebuah variabel array dengan maksimal data 10 nilai yang berisikan tinggi badan;
//Tampilkan array tersebut dengan menggunakan perulangan biasa dan perulangan for off.
//Teman-teman analisis perbedaan hasilnya,


var tinggiBadan = [150, 160, 170, 180, 190, 145, 155, 165, 175, 169];

console.log("menggunakan perulangan biasa");
for (var i = 0; i < tinggiBadan.length; i++) { //untuk menampilkan array dengan perulangan biasa kita gunakan .length
    console.log(tinggiBadan[i]);
}


//'menampilkan array dengan for of lebih simple
console.log("menggunkaan perulangan for of");
for (var x of tinggiBadan) {
    console.log(x);
}