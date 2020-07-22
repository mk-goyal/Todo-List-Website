//selectors
const todoInput = document.querySelector('.todo-input'); //we can use query selector instead of gEBI and gEBC methods
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click',addTodo);
//addEventListener('event',callback or anonymous(fat arrow =>)) it is similiar to add event to an html tag and then call a function when the event happens.
todoList.addEventListener('click',deletecheck);
filterOption.addEventListener('click',filterTodo);


//Functions

function addTodo(event) {
    //prevent form from submitting
    //event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';
    //create Li tag
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.className = 'todo-item';
    // set li tag as a child of div tag
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    completedButton.className = 'complete-btn';
    todoDiv.appendChild(completedButton);
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.className = 'trash-btn';
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    todoInput.value="";
}

function deletecheck(e) {
    const item = e.target;//target selects the element on which we clicks. Here when you click on any element it saves into item variable.
    //delete todo
    if(item.className === 'trash-btn'){//=== compares values and also checks datatypes, better to use instead of ==.
        const todo = item.parentElement;//use it to access any elements's parent element.
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
        //
    }

    //check mark
    if(item.className === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');//classList has toggle method which toggles between 2 classes. className doesn't have this method.
    }
}

//filter todo
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case 'all':
            todo.style.display = 'flex';
            break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
            break;
            case 'Uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
// we have almost done. we have created a nice website.
// ***next part of the project has some prerequisites so I will continue that after i have done with those things.
//save todos to local storage
// function saveLocalTodos(todo){
//     //check- do i have that todo already?
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     }
//     else{
        
//     }
// }