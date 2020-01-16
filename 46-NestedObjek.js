//nested objek atau objek didalam objek

function nestedObjek() {
    var mahasiswa = {
        nama: "vernanda",
        NIM: "1645400136",
        IPK: { //IPK adalah objek di dalam objek mahasiswa, untuk menulis objek didalam objek gunakan tanda titik dua :
            semester1: 3.50,
            semester2: 3.90,
            semester3: 4.00
        },
        alamat: "Palembang"
    }

    console.log(mahasiswa);
}

nestedObjek();