console.log("Hello World");

// var = old, let = changeable, const = unchangeable

let angka = 0;
angka = 1;

let string = "ini sebuah string";
string = "ini juga sebuah string";

const konstan = "ga bisa diubah";
// konstan = "coba ubah";

console.log(angka);

console.log(string);

console.log(konstan);

let listNama = ["Marcell", "Niko", "Lionel", "123", "456"];

listNama.forEach(element => {
  console.log(element);
});

for (let i = 0; i < listNama.length; i++) {
  console.log(listNama[i]);
  
  // = ---> declare
  // == --> tidak memperhatikan tipe data  (nilai, value)
  // === -> memperhatikan tipe data (nilai, value, tipe data)

  if (listNama[i] == 123) {
    console.log("sama dengan 2");
  }

  else if (listNama[i] === 123) {
    console.log("sama dengan 3");
  }
  
  else {
    console.log("idk");
  }
}

// \\
function Pertambahan(angka1, angka2) {
  return angka1 + angka2;
}

console.log(Pertambahan(9, 9));

// Event & EventListener
// Event: hover, click, keyPressed

let array = ["Setifen", "Onk", "Nais"];
let arrayIndex = array.length - 1;

function Previous() {
  
  document.getElementById("display").innerHTML = array[arrayIndex];
  arrayIndex--;

  if (arrayIndex < 0) {
    arrayIndex = array.length - 1;
  }
}

function Next() {
    document.getElementById("display").innerHTML = array[arrayIndex];
    arrayIndex++;
  
    if (arrayIndex > array.length-1) {
      arrayIndex = 0;
    }
  }

document.getElementById("next").addEventListener("click", function(){
    Next();
});

// isNAN(value)
// value is number = false(0)
// value contains char = true(1)

document.getElementById("input").addEventListener("keyup", function(){
  let hasilInput = document.getElementById("input").value;

  if(hasilInput.length !== 9) {
    document.getElementById("validation").innerHTML = "Not Valid!";
  } else {
    let inputSplit = hasilInput.split("-");
    console.log(inputSplit[0]);
    console.log(inputSplit[1]);

    if(isNaN(inputSplit[0]) || isNaN(inputSplit[1])) {
      document.getElementById("validation").innerHTML = "Input must be numerical!";
    } else {
      let nama = prompt("Please input your full name: ");
      let indexSpasi = nama.indexOf(" ");
      let firstName = nama.substring(0, indexSpasi);
      document.getElementById("validation").innerHTML = "Valid! Thank you: " + firstName;
    }
  }
});


// Math.random(); random num 0-1
// Math.round(); pembulatan biasa
// Math.ceil(); pembulatan ke atas
// Math.floor(); pembulatan ke bawah

console.log(Math.round((Math.random() * 10 + 1)) % 11);
console.log(Math.round(3.5));
console.log(Math.ceil(3.9));
console.log(Math.floor(3.1));