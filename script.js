// Button click -> input field ko data tanna paryo

const todoList = []

function addTodoItem() {
    // get input value
    const inputElement = document.getElementById('new-todo-item')
    const inputElementValue = inputElement.value

    // TODO list object
    const newTodoItem = {
        text: inputElementValue,
        completed: false
    }

    todoList.push(newTodoItem)

    updateTodoList()

    inputElement.value = ''

}

function updateTodoList() {
    // Get the todo element
    const todoListElement = document.getElementById('todo-list')

    // clear the existing list items
    todoListElement.innerHTML = ''

    // loop through the todolist array and create new list items
    for (const item of todoList) {
        // create list item
        const listItem = document.createElement('li')
        listItem.textContent = item.text

        // add item to list
        todoListElement.appendChild(listItem)

    }





}