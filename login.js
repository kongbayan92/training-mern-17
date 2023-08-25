let btnRegister = document.querySelector("#btn-register");
let btnSignin = document.querySelector("#btn-signin");
let inputUsername = document.querySelector("#input-username");
let inputPassword = document.querySelector("#input-password");
let txtHasil = document.querySelector("#txt-hasil");

let daftarPengguna = [];

btnSignin.addEventListener("click", function () {
  // validasi simple
  if (!inputUsername.value) {
    txtHasil.innerHTML = "tidak valid karena username kosong";
    return;
  }

  if (!inputPassword.value) {
    txtHasil.innerHTML = "tidak valid karena password kosong";
    return;
  }

  // cek di database local storage
  // ubah data object string ke object js menggunakan JSON.parse
  let members = JSON.parse(localStorage.getItem("members"));
  let status = false;

  if (members) {
    for (let i = 0; i < members.length; i++) {
      let passwordFromDB = members[i].password;
      let usernameFromDB = members[i].username;

      if (
        usernameFromDB === inputUsername.value &&
        passwordFromDB === inputPassword.value
      ) {
        status = true;
      }
    }
  }

  if (status) {
    console.log("login suskses");
  } else {
    console.log("login gagal");
  }
});

btnRegister.addEventListener("click", function () {
  // validasi simple
  if (!inputUsername.value) {
    txtHasil.innerHTML = "tidak valid karena username kosong";
    return;
  }

  if (!inputPassword.value) {
    txtHasil.innerHTML = "tidak valid karena password kosong";
    return;
  }

  // proses
  daftarPengguna.push({
    username: inputUsername.value,
    password: inputPassword.value,
  });

  localStorage.setItem("members", JSON.stringify(daftarPengguna));
});

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log("cetak i ke" + i);
}
