//Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
//Setelah itu teman teman tampilkan nilai kelipatan 3 pada perulangan tersebut
//Tampilkan hasilnya dengan console.log()
//Tampilan Output akan berupa nilai 3 , 6 ,9 , 12 ,15 dst.


for (var i = 0; i <= 20; i += 3) {
    console.log(i);
}

console.log("\n");

var i = 0;
while (i <= 20) {
    console.log(i);
    i += 3;
}

console.log("\n");

let a = 0;
do {
    console.log(a);
    a += 3;
} while (a <= 20)