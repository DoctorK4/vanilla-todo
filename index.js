const inputWrapper = document.querySelector('.input-wrapper');
const todolist = document.querySelector('.todo-list');

const addTodo = (e) => {
  
  const input = document.querySelector('.input-todo');
  const button = document.querySelector('.add-todo');
  
  if (e.target === button) {
    todolist.insertAdjacentHTML("beforeend", `<li>${input.value}</li>`);
  }

  input.value = "";
}

addEventListener('click', addTodo)