// Button click -> input field ko data tanna paryo


function addTodoItem() {
    // get input value
    const inputElement = document.getElementById('new-todo-item')
    const inputElementValue = inputElement.value

    // TODO list object
    const newTodoItem = {
        text: inputElementValue,
        completed: false,
        deleted: false
    }

    todoList.push(newTodoItem)

    updateTodoList()

    inputElement.value = ''

}

/*
1. Dynamic Events
2. Dynamic classes
*/

/**
 * Recursion
 * Re-rendering
 */

function updateTodoList() {
    // Get the todo element
    const todoListElement = document.getElementById('todo-list')

    // clear the existing list items
    todoListElement.innerHTML = ''

    // loop through the todolist array and create new list items
    todoList.forEach((item, index) => {
        const listItem = document.createElement('li')
        listItem.textContent = item.text

        const span = document.createElement('span');
        span.textContent = "\u00d7";
        span.classList.add('cursor')
        listItem.appendChild(span);



        listItem.addEventListener('click', (event) => {
            event.stopPropagation()
            item.completed = true
            updateTodoList()
        })

        span.addEventListener('click', (event) => {
            event.stopPropagation()
            // REMOVED FROM UI
            // listItem.remove()
            // SOFT DELETE from ARRAY
            // item.deleted = true;
            todoList.splice(index, 1)
            updateTodoList()
            console.log('todoList', todoList)
        })


        if (item.completed) {
            listItem.classList.add('completed')
        }

        if (item.deleted) {
            listItem.classList.add('deleted')
        }

        // addEventListener

        // add item to list
        todoListElement.appendChild(listItem)
    })
    // for (const item of todoList) {
    //     // create list item


    // }
}

const todoList = []


test = 2
console.log('test', test);

var test = 5;
