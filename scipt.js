let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo = "";

todoInput.addEventListener("change" , (e)=> {
    e.preventDefault();
    todo = todoInput.value;
    console.log("Entered: ",todo);
})

addTodoButton.addEventListener("click",()=> {
    console.log("Button Clicked ");
})
