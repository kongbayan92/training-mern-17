let button = document.querySelector("button");
let inputTodo = document.querySelector("#input-todo");

button.addEventListener("click", function () {
  console.log(inputTodo.value);
});
