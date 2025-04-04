const todoInput = document.getElementById("todo-Input");
const todoButton = document.getElementById("subit-todo");
const todoList = document.getElementById("list");
const error = document.getElementById("error")


todoButton.addEventListener("click", () => {

    const activity = todoInput.value;

    if(activity = "") {
        error.style.display = "block";
        error.textContent = "Can't be empty"
    }
})