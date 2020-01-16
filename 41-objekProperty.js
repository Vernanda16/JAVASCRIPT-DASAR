//objek properti
//properti adalah isi dari objek, contoh dibawah ada objek laptop yang berisi tiga property yaitu type, warna, harga

function objekProperti() {
    var laptop = {
        type: "Asus", //properti type yang berisi Asus
        warna: "Merah",
        harga: 3000000
    }

    laptop.warna = "Hitam"; //kita bisa mengubah nilai dari properti tanpa harus masuk kedalam variable objek jadi fleksibel bisa diubah dimanapun
    

    console.log(laptop);
    console.log(laptop.harga);
}

objekProperti();