//nested Array artinya array didalam array

const contohNestedArray = function () {
    var nama = [
        ["ab", "ac", "ad"],
        ["kucing", "kambing", "ayam"],
        ["kamu", "aku", "kita"]
    ];

    //untuk mengecek berapa panjang atau berapa banyak isi dari variable nama
    console.log(nama.length);
    console.log(nama[2]);
    //menampilkan array dengannilai spesifik
    console.log(nama[1][2]);
}

contohNestedArray();