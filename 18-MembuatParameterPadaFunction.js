//jika kitamembuat parameter pada funtion, maka kita wajib mengisi parameter tersebut ketika kita melakukan pemanggilan function

//contoh pertama
function contoh1(param1, param2) {
    console.log(param1, param2);
}

//contoh kedua
const contoh2 = function (pm1, pm2, pm3) {
    console.log(pm1);
    console.log(pm2);
    console.log(pm3);
}

//contoh ketiga
const contoh3 = (para1, para2) => {
    var perkalian = para1 * para2;
    return perkalian;
}


//jika parameternya kita isi dengan string dan lebih dari satu maka koma pemisah harus diluar tanda kutip
contoh1("Aku", "Kamu");

contoh2("Nama:Vernanda", "Alamat:Lubai", "Hobi:Makan");

console.log(contoh3(5, 5));