//menampilkan objek dengan perulangan for in 
//for in hanya digunakan untuk nilai yang bertipe objek, berbeda dengan for of yang hanya untuk nilai bertipe array


var mahasiswa = {
    nama: "Vernanda",
    NIM: 1645400136,
    umur: 23,
    alamat: "palembang"
}

for (var x in mahasiswa) {
    console.log(mahasiswa[x]);
}

console.log(mahasiswa);


function contohForOf() {
    var mobil = [1, 2, 3, 4, 5, ];

    for (var mobil2 of mobil) {
        console.log(mobil2);
    }

}

contohForOf();