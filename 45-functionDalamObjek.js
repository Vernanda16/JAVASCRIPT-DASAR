//function dalam objek

var x = {
    pesan: helo() //function didalam objek, function helo() adalah pemanggilan function helo() yang ada dibawah
}

console.log(x.pesan); //menampilkan isi property


//function yang akan dipanggil didalam objek
function helo() {
    return "Hai gaes, ini contoh function";
}