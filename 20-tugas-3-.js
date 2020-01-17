//Buatlah sebuah function yang mempunyai nilai balik atau return dan sebuah parameter / argument
//Setelah itu teman teman kirimlah sebuah nilai kedalam function tersebut
//Didalam function tersebut teman teman ubah nilai dari variabel yang dikirim lalu kembalikan dengan return
//Setelah nilai dikembalikan , tampilkan kedua nilai tersebut sebelum dirubah didalam function dan sesudah


function contohTugas(contohParameter) {
    console.log("sebelum di ubah :", contohParameter);
    var ubah = contohParameter;
    ubah = 7;

    return ubah;
}

console.log("setelah di ubah :", contohTugas(5));