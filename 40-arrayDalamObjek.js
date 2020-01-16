//Array dalam objek

const panggilObjek = function () {
    var komputer = {
        merk: "Asus",
        warna: "Biru",
        harga: 4000000,
        tahun: [2001, 2002, 2003, 2004] //Array di dalam objek
    }

    console.log(komputer) //menampilkan seluruh isi objek komputer
    console.log(komputer.harga) //menampilkan hanya property harga
    console.log(komputer.tahun); //menampilkan isi dari properti tahun dan seluruh isi array
    console.log(komputer.tahun[3]); //menampilkan isi dari property tahun dengan index array tertentu
}

panggilObjek();