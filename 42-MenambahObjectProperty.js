//menambah objek properti
/*
kita bisa menambah properti di dalam variable objek tanpa harus masuk kedalam variable objek tersebut
hal ini dikarenakan objek bersifat dinamis dengan kata lain bisa diakses dan di ubah dari manapun
*/


var objek = {
    nama: "vernanda",
    NIM: 1645400136,
    alamat: "Palembang",
}

objek.nama = "Agus"; //merubah nilai property nama menjadi agus
objek.noHP = 082379912944; //menambahkan property noHP
console.log(objek);