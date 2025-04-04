const todoInput = document.getElementById("todo-Input");
const todoButton = document.getElementById("subit-todo");
const todoList = document.getElementById("list");
const error = document.getElementById("error")


todoButton.addEventListener("click", () => {

    const dos = todoInput.value
    if( dos === "") {

        error.style.display = "block";

        error.textContent = "Can't be empty";
    } else {
        error.style.display = "none";
    }


    if(todoInput !== ""){

        const activityList = document.createElement("li");
        todoInput.innerHTML = dos;

        const deleteTodo = document.createElement("button")
        deleteTodo.textContent = "X"
        deleteTodo.innerHTML = deleteTodo

        deleteTodo.classList.add("delete");
        deleteTodo.addEventListener("click", () => {
            activityList.remove()
        });

        activityList.appendChild(deleteTodo);
        todoList.appendChild(activityList);
        todoInput.value = "";

    }


})

