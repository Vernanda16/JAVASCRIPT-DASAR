//operator increment dan decrement
//operator ini biasa digunakan untuk perulangan

//increment
function increment() {
    console.log("Ini contoh Increment");
    var x = 0; //nilai pertama x adalah 0
    console.log(x); //ketika pertama kali dicetak akan bernilai 0
    x++; //kemudian x akan bertambah 1 dari 0 menjadi 1
    console.log(x); //ketika dicetak akan tampil 1
    x++; //lalu kemudian x bertambah 1 dari 1 menjadi 2
    console.log(x); //ketika dicetak akan tampil 2
}

increment();

console.log("\n");

function decrement() {
    console.log("Ini contoh Decrement");
    var x = 2;
    console.log(x);
    x--;
    console.log(x);
    x--;
    console.log(x);
}

decrement();