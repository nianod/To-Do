const todoInput = document.getElementById("todo-Input");
const todoButton = document.getElementById("subit-todo");
const todoList = document.getElementById("list");
const error = document.getElementById("error")


todoButton.addEventListener("click", () => {

   const dos = todoInput.value.trim();          //stores input in this new variable

   //handling Empty input
    if( dos === "") {

        error.style.display = "block";

        error.textContent = "Can't be empty";
        return;
    } else {
        error.style.display = "none";
    }
    


    if(dos !== ""){

        const activityList = document.createElement("li"); //creates new list element and sets it to whatever the user types

        activityList.innerText = dos;


        const deleteTodo = document.createElement("button");        //Creates new button element
 
        deleteTodo.innerHTML = "Remove"
        //deleteTodo.innerText = deleteTodo

        deleteTodo.classList.add("delete");

        deleteTodo.addEventListener("click", () => {
            activityList.remove()


        });


        //Attach elements
        activityList.appendChild(deleteTodo);
        todoList.appendChild(activityList);

        //clear input
        todoInput.value = "";


    }


})

const switchMode = document.getElementById("mode");

switchMode.addEventListener("click", () => {
    
    

    document.body.classList.toggle("modeColor")

})
