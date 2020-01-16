//menampilkan objek dengan perulangan for in 


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