let button = document.querySelector("button");
let inputTodo = document.querySelector("#input-todo");
let daftarItem = document.querySelector("#daftar-item");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inputTodo.value;
  daftarItem.appendChild(item);
});
