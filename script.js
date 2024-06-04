// Button click -> input field ko data tanna paryo

function addTodoItem() {
    // get input value
    const inputElement = document.getElementById('new-todo-item')
    const inputElementValue = inputElement.value

    // Get the todo element
    const todoListElement = document.getElementById('todo-list')

    // create list item
    const listItem = document.createElement('li')
    listItem.textContent = inputElementValue

    // add item to list
    todoListElement.appendChild(listItem)

}