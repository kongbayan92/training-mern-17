let button = document.querySelector("#tambah-item");
let inputTodo = document.querySelector("#input-todo");
let daftarItem = document.querySelector("#daftar-item");
let inputHarga = document.querySelector("#input-harga");
let totalHargaKeseluruhan = document.querySelector("#total-harga-keseluruhan");
let inputBudget = document.querySelector("#input-budget");
let setBudget = document.querySelector("#set-budget");
let inputDiskon = document.querySelector("#input-diskon");
let setDiskon = document.querySelector("#set-diskon");
let listItem = document.querySelector(".list-item");

let hargaAfterDiskon = 0;
let totalHarga = 0;
let tampungBudget = 0;

/**
 * Menambahkan input dan kodingan untuk memberikan diskon
 */

button.addEventListener("click", function () {
  let item = `
  <tr>
    <td>${inputTodo.value}</td> 
    <td>${inputHarga.value}</td>
  </tr>`;
  listItem.innerHTML += item;

  // Total Harga
  totalHarga = totalHarga + parseInt(inputHarga.value);
  totalHargaKeseluruhan.innerHTML = totalHarga;

  if (totalHarga <= tampungBudget) {
    totalHargaKeseluruhan.setAttribute("class", "aman");
    // ketika budget masih sesuai dengan total belanja
    console.log("Budget Masih Aman");
  } else {
    // ketika budget gak cukup
    totalHargaKeseluruhan.setAttribute("class", "danger");
    console.log("Budget kaga cukup cui...");
  }
});

setBudget.addEventListener("click", function () {
  tampungBudget = parseInt(inputBudget.value);

  console.log(tampungBudget);
});

setDiskon.addEventListener("click", function () {
  let potonganHarga = totalHarga * (parseInt(inputDiskon.value) / 100);
  hargaAfterDiskon = totalHarga - potonganHarga;
  totalHargaKeseluruhan.innerHTML = `Potongan harga diskon ${potonganHarga} - Total dibayar ${hargaAfterDiskon} , harga asli ${totalHarga}`;
  // console.log(totalHarga);
});
