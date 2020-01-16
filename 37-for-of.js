//for of

function for_of() {
    var angka = [1, 9, 3, 11, 8, 6, 7];

    for (let x of angka) {
        console.log(x);
    }
}

for_of();

/* 
yang membedakan perulangn for of adalah kita membuat variable baru didalam perulangan for yang dimana
variable ini berfungsi untuk menampung data dari variable Array, dan variable inilah yang akan dijalankan
sebenarnya perulangan ini mirip dengan perulangan foreach
*/