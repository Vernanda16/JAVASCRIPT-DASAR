function kembalikan() {
    return "Ini contoh pertama untuk mengembalikan nilai function";
}

const contoh2 = function () {
    var penjumlahan = 5 * 5;
    return penjumlahan;
}

const contoh3 = () => {
    var coba = "ini contoh saja";
    return coba;
}
var panggil = contoh3();

console.log(kembalikan());
console.log(contoh2());
console.log(panggil);