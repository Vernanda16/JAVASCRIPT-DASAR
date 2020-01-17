//Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
/*
Setelah itu teman teman buatlah sebuah kondisi pada perulangan jika dia bilangan genap 
dia akan menampilkan text bilangan genap bukan angkanya, tetapi kalau yang tampil bilangan ganjil , 
biarkan angka nya yang ditampilkan.
*/
//Tampilkan hasilnya dengan console.log()
//Gunakan if dan modulus %


console.log("---menggunakan for---");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("ini adalah bilangan genap -", i);
    } else {
        console.log(i);
    }
}

console.log("\n");


console.log("---menggunakan while---");
var a = 1;
while (a <= 20) {
    if (a % 2 == 0) {
        console.log("ini adalah bilangan genap ke -", a);
    } else {
        console.log(a);
    }
    a++;
}