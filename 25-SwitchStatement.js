//switch adalah struktur kendali yang mirip dengan IF 

function contohSwitch() {
    var nilai = 10;

    switch (nilai) {
        case 10:
            console.log("Sangat bagus");
            break;
        case 9:
            console.log("bagus");
            break;
        case 8:
            console.log("lumayan");
        default:
            console.log("Lainnya");
            break;
    }
}

contohSwitch();

const contohSwitch2 = () => {
    var nama = "randi";

    switch (nama) {
        case "randi":
            console.log("nama randi");
            break;
        case "bila":
            console.log("nama bila");
        case "upie":
            console.log("nama upie");
        default:
            console.log("nama tidak diketahui");
            break;
    }
}

contohSwitch2();