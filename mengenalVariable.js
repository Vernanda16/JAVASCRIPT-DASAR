//Variable var bisa diakses dan dirubah nilainya dari manapun tanpa scope variable
//secara default jika kita menulis variable tanpa keyword maka yang terjadi sebenarnya adalah menngunakan keyword var meskipun tidak kita tulis
var message = "Hello World";
let message2 = "Hello Dunia";
const nama = "Vernanda";
//untuk variable const nilainya bersifat tetap dan tidak bisa di ubah

//variable var dan const bisa diakses dari lingkup mana saja, berbeda dengan let yang hanya di dalam lingkupnya saja

if (true) {
    var message = "Hai Kamu";
    //variable let hanya bisa diakses dari dalam lingkup scope saja, contoh dalam hal ini hanya bisa diakses didalam kurung kurawal
    let message2 = "Hello Kamu";
    console.log(message2);
    console.log(nama);
}

console.log(message);
console.log(message2);
console.log(nama);