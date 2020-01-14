//program ini akan melakukan perulangan tanpa henti, untuk menghentikannya secara manual tekan ctrl + C pada keyboard


const contohInfinityLoop = () => {
    for (var i = 1; i >= 1; i++) {
        console.log(i);
    }
}


const contohInfinityLoop2 = function () {
    var i = 1;

    while (true) {
        console.log(i);
        i++;
    }
}

contohInfinityLoop();
contohInfinityLoop2();