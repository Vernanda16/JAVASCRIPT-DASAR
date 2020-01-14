function contoh() {
    const angka = 6;

    if (angka === 3) {
        console.log("ternyata angkanya tiga")
    } else if (angka === 1) {
        console.log("ternyata angkanya 1")
    } else {
        console.log("ternyata yang ini benar")
    }
}

contoh();


//jika argumen pada pengkondisian hanya satu baris maka bisa ditulis tanpa kurung kurawal

const contoh2 = () => {
    var nilai = 5;

    if (nilai >= 6) console.log("nilainya lebih besar dari enam")
    else if (nilai <= 5) console.log("nilainya sama dengan atau lebih kecil dari 5")
    else console.log("ini nilai yang benar")
}

contoh2();