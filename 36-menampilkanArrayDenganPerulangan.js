//menampilkan array dengan perulangan for

const menampilkanArray = () => {
    var angka = [6, 9, 4, 3, 7, 1];


    for (var i = 0; i < angka.length; i++) {
        console.log(angka[i]);
    }
}

menampilkanArray();

//menampilkan array dengan perulangan dalam contoh diatas kita menampilkan isi array yang dimulai dari indeks ke 0
/* bisa kita lihat dalam kondisi perulangan i=0; i<angka.length artinya perulangan dimulai dari indeks ke 0 dan harus berhenti 
sampai akhir panjang dari isi array */