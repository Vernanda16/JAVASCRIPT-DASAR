//Buatlah sebuah variabel object versi teman teman.
//Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
//Setelah itu tampilkan objectnya dengan perulangan for in.

var data = {
    nama: "vernanda",
    NIM: 1645400136,
    umur: 23,
    alamat: "palembang",
    pesan: menyapa(),
    IPK: {
        semester1: 4.00,
        semester2: 4.00,
        semester3: 3.80,
        semester4: 3.90
    },
    panggilan: ["andhut", "yandra", "vernanda"]
}

function menyapa() {
    return "haii, gaes nama saya vernanda";
}

for (var x in data) { //perulangan for in untuk menampilkan objek, kalu for of untuk menampilkan array
    console.log(data[x]);
}