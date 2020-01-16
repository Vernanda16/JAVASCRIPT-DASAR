//format dasar objek

const contohFormatObjek = () => {
    var laptop = {
        type: "asus",
        harga: 7000000,
        warna: "gold"
    }

    console.log(laptop); //menampilkan seluruh isi dari objek laptop
    console.log(laptop.type); //menampilkan hanya properti type 
}

contohFormatObjek();