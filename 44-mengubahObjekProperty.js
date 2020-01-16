//mengubah property objek

var mobil = {
    type: "kijang",
    warna: "biru",
    harga: 7000000
}

mobil.type = "sedan"; //merubah isi dari property type
mobil.type = true; //kita juga bisa mengubah isi dari property dengan type data yang lain, misal boolean, int, atau string
console.log(mobil);


/*
yang perlu kita ingat adalah saat mengubah, 
menambah isi dari property dari luar objek kita wajib menggunakan tanda = bukan tanda :
*/