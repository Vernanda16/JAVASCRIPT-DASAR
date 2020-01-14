//nested loop

const perulanganBersarang = () => {

    for (var i = 1; i <= 10; i++) {
        console.log("*");
        for (var j = 1; j <= i; j++) {
            console.log("*");
        }

        console.log(" ");
    }
}


perulanganBersarang();