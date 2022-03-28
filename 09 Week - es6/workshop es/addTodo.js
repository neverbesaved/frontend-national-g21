// 2. Sa permitem adaugarea unui TODO
console.log("addTodo.js -", baseUrl);

// Task1: Facem un input + button
// Task2: Sa inregistram un event pe button. Cand se face click sa obtinem valoare din input
// Task3: Facem request la server cu valoare din input 

const toDoInput = document.getElementById("todo-input");
const toDoButton = document.getElementById("todo-button");

toDoButton.onclick = async function () {
  const newTodo = {
    name: toDoInput.value,
    completed: false
  }

  // createToDoServer(newTodo).then(function () {
  //   location.reload();
  // })

  await createToDoServer(newTodo)
  location.reload();
}