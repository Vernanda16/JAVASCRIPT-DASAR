//mengecek type data
//untuk type data array dan objek akan menampilkan keterangan sama yaitu objek

function cekTipeData() {
    var nama = "vernanda";
    var NIM = 1645400136;
    var alamat = true;
    var IPK = 4.00;
    var angka = [1, 2, 3, 4, 5, 6];
    var buah = {
        warna: "merah",
        rasa: "manis",
        bentuk: "bulat"
    }

    //untuk mengecek type data sebua variable gunakan fungsi type of
    console.log(typeof (nama)); //mengecek type data variable nama
    console.log(typeof (NIM));
    console.log(typeof (alamat));
    console.log(typeof (IPK));
    console.log(typeof (buah));
    console.log(typeof (angka)); //mengecek type data variable angka, yang akan menampilkan objek karena array samadengan objek
}

cekTipeData();