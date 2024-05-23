let todoInput = document.querySelectorAll('.todo-input');
let todoListDiv = document.querySelectorAll('.todo-list');
let buttonEl = document.querySelectorAll(".button-change")

let allTodos = [];

function add() {
    let newTodo = todoInput[0].value;
    allTodos.push(newTodo);
    printAllTodos();
    todoInput[0].value = "";
    // console.log(allTodos)
}

function printAllTodos() {
    todoListDiv[0].innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv[0].innerHTML += `
            <p id="todo-${i}">
                ${allTodos[i]}
                <button onclick="deleteTodo(${i})">Delete</button>
                <button onclick="editTodo(${i})">Edit</button>
            </p>
        `;
    }
}

function deleteTodo(index) {
    allTodos.splice(index, 1);
    printAllTodos();
}

let addTodoDiv = document.querySelectorAll("#add-todo-container")[0];
let editTodoDiv = document.querySelectorAll("#edit-todo-container")[0];
let editInput = document.querySelectorAll(".edit-todo-input")[0];
let editIndex;

function editTodo(index) {
    if (isEditing) {
        displayErr()
    }
    else {
        toggleTodoInput()
        editInput.value = allTodos[index]
        editIndex = index
    }
}


function updateTodo() {
    toggleTodoInput()
    allTodos.splice(editIndex, 1, editInput.value)
    printAllTodos()
    console.log(allTodos);
}

let isEditing = false
function toggleTodoInput() {
    if (isEditing) {
        addTodoDiv.className = ""
        editTodoDiv.className += " hide"
    }
    else {
        addTodoDiv.className += " hide"
        editTodoDiv.className = ""
    }
    isEditing = !isEditing
}


let errorEl = document.querySelectorAll(".error-msg")[0];
function displayErr() {
    errorEl.innerHTML = 'Please save current todo first.';
    setTimeout(function () {
        errorEl.innerHTML = "";
    }, 3000)
}