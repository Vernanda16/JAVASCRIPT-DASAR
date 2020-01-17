//Buatlah 3 buah variabel yang berisi nilai tinggi badan siswa
//Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
//Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

var siswa1 = 172;
var siswa2 = 180;
var siswa3 = 156;

if (siswa1 > siswa2) {
    if (siwa2 > siswa3) {
        console.log("siswa2 lebih tinggi dari siswa3")
    } else {
        console.log("siswa2 lebih pendek dari siswa3");
    }
} else {
    if (siswa2 > siswa3) {
        if (siswa1 > siswa2) {
            console.log("siswa1 lebih tinggi dari siswa2")
        } else if (siswa2 > siswa1) {
            console.log("siswa2 paling tinggi");
        }

    }
}