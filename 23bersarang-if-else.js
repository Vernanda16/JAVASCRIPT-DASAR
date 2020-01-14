var x = 600;
var z = 250;
var y = 300;

// Struktur IF akan dijalankan secara sequential atau terstruktur dari atas kebawah, pertama akan mengecek dari atas
// jika kondisi terpenuhi maka akan dijalankan namun jika tidak terpenuhi maka blok if itu akan dilewatkan

if (x < y) {
    if (x < z) {
        console.log("X adalah nilai terkecil")
    } else {
        console.log("X bukan nilai terkecil");
    }
} else if (y < z) {
    console.log("Y adlah nilai terkecil");
} else {
    if (z < y) {
        console.log("Z adalah nilai terkecil")
    } else {
        console.log("Z bukan nilai terkecil");
    }
}