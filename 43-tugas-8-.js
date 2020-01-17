//Buatlah sebuah variabel object versi teman teman.
//Tampilkan nilai awal dari masing masing object yang teman teman buat.
//Setelah itu teman teman lakukan perubahan nilai pada salah satu object yang teman teman buat dan tampilkan kembali.

var contohObjek = {
    contoh1: "aku",
    contoh2: "kamu",
    contoh3: 123,
    contoh4: true,
    contoh5: 4.5
}
console.log(contohObjek.contoh1); //untuk menampilkan hanya properti tertentu dalam  objek ketik nama objek sambung dengan titik lalu properti
contohObjek.contoh2 = "dia"; //mengubah isi objek ketik nama objek sambung dengan properti yang ingin di ubah isi degna perubahan
console.log(contohObjek);
contohObjek.contoh6 = "kamu";
console.log(contohObjek);