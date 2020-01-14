//perulngan while

const contohWhile = () => {
    var i = 1;
    while (i <= 10) {
        console.log("urutan angka ke -", i);
        i++;
    }
}

const contohWhile2 = function () {
    let i = 1;
    while (i <= 10) {
        console.log("angka ke :", i);
        i++;
    }
}

function contohWhile3() {
    var i = 1;
    while (i <= 10) {
        console.log("urutan ke =", i)
        i++;
    }
}

contohWhile();
contohWhile2();
contohWhile3();