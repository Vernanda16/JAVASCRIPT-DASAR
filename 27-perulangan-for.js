//perulngan for

const perulangan = function () {
    for (let i = 1; i <= 10; i++) {
        console.log("angka :", i);
    }

}

function perulangan2() {
    for (var i = 1; i <= 10; i++) {
        console.log("urutan ke :", i);
    }
}

const perulangan3 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log("angka ke -", i);
    }
}

perulangan();
perulangan2();
perulangan3();