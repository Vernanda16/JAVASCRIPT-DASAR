//Perulangan do while akan mengeksekusi program terlebih dahulu, baru kemudian mengecek kondisi. 
//kalaupun kondisi tidak terpenuhi maka program tetap akan dijalankan minimal satu kali

function contohDoWhile() {
    let i = 11;

    do {
        console.log("angka ke -", i);
        i++;
    } while (i < 10);
}

const contohDoWhile2 = function () {
    var i = 1;

    do {
        console.log("angka urutan ke :", i);
        i++;
    } while (i <= 10);
}

const contohDoWhile3 = () => {
    var i = 1;

    do {
        console.log("Urutan =", i);
        i++;
    }
    while (i <= 10);
}


contohDoWhile();
contohDoWhile2();
contohDoWhile3();