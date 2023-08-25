// 1. event listener
let buttonPenjumlahan = document.querySelector("button");

// addEventListener untuk penjumlahan
buttonPenjumlahan.addEventListener("click", function () {
  let inputNumber1 = document.querySelector("#angka1");
  let inputNumber2 = document.querySelector("#angka2");

  // untuk mengambil nilai dari objek input, gunakan
  // properti .value

  // menampilkan hasil perhitungan ke dalam span
  // 1. kaitkan elemen span ke js
  let spanHasil = document.querySelector("span");
  let hasilHitung = parseInt(inputNumber1.value) - parseInt(inputNumber2.value);

  if (hasilHitung || hasilHitung === 0) {
    spanHasil.innerHTML = hasilHitung;
  } else {
    spanHasil.innerHTML = "Perhitungan tidak valid";
  }
});
