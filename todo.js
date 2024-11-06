// Getting elements from the DOM //
const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");

function getToDo(value) {
    // Creating new elemnts //
    let todo = document.createElement("div");
    let textEl = document.createElement("span");

    // Setting values and styles //
    textEl.textContent = value;

    // Append the element to the DOM // 
    todo.appendChild(textEl);

    // Close the element //
    let closeEl = document.createElement("span");
    closeEl.textContent = "X";
    closeEl.classList.add("delete");

    // Attach events //
    closeEl.addEventListener("click", (e) =>{
      todos.removeChild(todo);
    });

    // Append the close element to the todo element //
    todo.appendChild(closeEl);
    todo.classList.add("todo");
    return todo;
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    if(!value.trim()) return;
    todos.appendChild(getToDo(value));
    input.value = "";
});