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


    if(dos !== ""){

        const activityList = document.createElement("li");
        activityList.innerText = dos;

        const deleteTodo = document.createElement("button")
        deleteTodo.innerHTML = "Remove"
        //deleteTodo.innerText = deleteTodo

        deleteTodo.classList.add("delete");
        deleteTodo.addEventListener("click", () => {
            activityList.remove()
        });

        activityList.appendChild(deleteTodo);
        todoList.appendChild(activityList);
        todoInput.value = "";

    }


})

