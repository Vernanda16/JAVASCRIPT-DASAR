//break artinya menghentikan perulangan berdasarkan kondisi yang di inginkan
function contohBreak() {
    for (var i = 1; i <= 10; i++) {

        console.log(i);
        if (i == 4)
            break;

    }
}

contohBreak();


console.log(" ");

//continue artinya meloncati perulngan berdasarkan kondisi yang di inginkan, jika kondisi terpenuhi maka akan dilewati dan tidak akan dijalankan
//contoh dalam hal ini kita akan mengecek apakah i == 3 jika benar maka langsung loncat ke 4 tanpa mencetak angka 3
const contohContinue = () => {
    for (var i = 1; i <= 10; i++) {


        if (i == 3)
            continue;
        console.log(i);
    }
}

contohContinue();