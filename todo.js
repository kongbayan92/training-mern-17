let button = document.querySelector("#tambah-item");
let inputTodo = document.querySelector("#input-todo");
let daftarItem = document.querySelector("#daftar-item");
let inputHarga = document.querySelector("#input-harga");
let totalHargaKeseluruhan = document.querySelector("#total-harga-keseluruhan");
let inputBudget = document.querySelector("#input-budget");
let setBudget = document.querySelector("#set-budget");
let totalHarga = 0;
let tampungBudget = 0;

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = `${inputTodo.value} ${inputHarga.value}`;
  daftarItem.appendChild(item);

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
