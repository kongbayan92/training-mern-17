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

// button.addEventListener("click", function () {
//   let item = `
//   <tr>
//     <td>${inputTodo.value}</td>
//     <td>${inputHarga.value}</td>
//   </tr>`;
//   listItem.innerHTML += item;

//   // Total Harga
//   totalHarga = totalHarga + parseInt(inputHarga.value);
//   totalHargaKeseluruhan.innerHTML = totalHarga;

//   if (totalHarga <= tampungBudget) {
//     totalHargaKeseluruhan.setAttribute("class", "aman");
//     // ketika budget masih sesuai dengan total belanja
//     console.log("Budget Masih Aman");
//   } else {
//     // ketika budget gak cukup
//     totalHargaKeseluruhan.setAttribute("class", "danger");
//     console.log("Budget kaga cukup cui...");
//   }
// });

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

class Motor {
  constructor(merk) {
    this.merk = merk;
  }

  jalan() {
    return `Motor bermerk ${this.merk} sedang berjalan.`;
  }
}

// Challenge: buat class budget dan implementasinya

class Budget {
  constructor(harga) {
    this.harga = harga ? harga : 0;
  }

  getBudget() {
    return this.harga;
  }
}

class Barang {
  static items = [];
  static total = 0;
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = parseInt(harga);
  }

  add() {
    let listItem = document.querySelector(".list-item");
    Barang.items.push({
      nama: this.nama,
      harga: this.harga,
    });
    let item = `
    <tr>
      <td>${this.nama}</td> 
      <td>${this.harga}</td>
    </tr>`;
    listItem.innerHTML += item;
  }

  printItems() {
    // console.log(this.items);
    let daftar = document.querySelector("#daftar-item");
    daftar.innerHTML = Barang.items
      .map((item) => `<li>${item.nama.toUpperCase()} ${item.harga}</li>`)
      .join("");
  }

  setTotalHarga() {
    Barang.total = Barang.total + parseInt(this.harga);
    document.querySelector("#total-harga-keseluruhan").innerHTML = Barang.total;
  }

  validate(objBudget) {
    if (Barang.total <= objBudget.getBudget()) {
      totalHargaKeseluruhan.setAttribute("class", "aman");
      // ketika budget masih sesuai dengan total belanja
      console.log("Budget Masih Aman");
    } else {
      // ketika budget gak cukup
      totalHargaKeseluruhan.setAttribute("class", "danger");
      console.log("Budget kaga cukup cui...");
    }
  }
}

let barang = null;
let budget = null;

inputBudget.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  budget = new Budget(parseInt(e.target.value));
  if (barang) {
    barang.validate(budget);
  }
});

button.addEventListener("click", () => {
  barang = new Barang(
    document.querySelector("#input-todo").value,
    document.querySelector("#input-harga").value
  );

  barang.add();
  barang.setTotalHarga();

  if (budget) {
    barang.validate(budget);
  }
});

document.querySelector("#print-item").addEventListener("click", (e) => {
  if (barang) {
    barang.printItems();
  }
});
