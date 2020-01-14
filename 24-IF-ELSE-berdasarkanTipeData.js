//pengkondisian yang menggunakan operator inisialisasi atau operator sama dengan, itu ada dua metode
//yang pertama jika operator sama dengan ada dua maka dia hanya akan mengecek nilai tanpa mengecek tipe datanya
//tapi jika tanda sama dengan nya ada tiga maka dia akan mengecek nilai sekaligua tipe datanya intinya lebih spesifik
//penggunaan tanda sama dengan tiga lebih di sarankan, karena dengan cara seperti itu akan lebih spesifik


function TipeData() {
    var nilai = 6;

    console.log(typeof (nilai));

    //Jika dijalankan program akan mencetak GAGAL hal ini karena nilai pada if dibawah memiliki tipe data string sedangkan variable nilai diatas bertipe data number
    //dan kita menggunakan operator sama dengan tiga yang artinya tidak hanya mengecek nilai tapi juga tipe data
    if (nilai === "6") {
        return "sukses";
    } else {
        return "gagal!";
    }
}

console.log(TipeData());