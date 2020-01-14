//ketika kitatidak mengirimkan nilai apapun saat pemanggilan function maka nilai default yang ada di parameter otomatis yang dijalankan
//tapi jika kitamengirimkan nilai pada saat pemanggilan function maka nilai yang dikirm itu yang dijalankan
//intinya nilai default hanya akan dijalankan jika kita tidak mengirimkan nilai apapun saat pemanggilan function 

function contoh(x = 5) {
    console.log(x);
}

contoh();
contoh(6);


const contoh2 = function (x = "ini akan dijalankan jika user tidak mengirimkan nilai apapun") {
    console.log(x);
}

contoh2();
contoh2("dan yang ini akan dijalankan karena user mengisikan ini sebagai nilai")