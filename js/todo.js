let todos = localStorage.todos

let addBtn = document.getElementById('addTodo')
let title = document.getElementById('title')
let todoList = document.getElementById('todoList')

addBtn.addEventListener('click', event => {

    if (!title.value) {
        alert('Input todo')
        return false
    }

    let todo = {
        title: title.value,
        isCompleted: false
    }

    let todos = []

    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos)
    }

    todos.push(todo)
    localStorage.todos = JSON.stringify(todos)

    title.value = ''

    loadTodos()

});


function loadTodos() {

    if (localStorage.todos) {

        todoList.innerHTML = ''

        let todos_ = JSON.parse(localStorage.todos)

        for (i=0; i <= todos_.length; i++) {
            todoList.insertAdjacentHTML('beforeend', '<li class="ui-state-default">\n' +
                '                        <div class="checkbox">\n' +
                '                            <label>\n' +
                '                                <input type="checkbox" value="" />'+todos_[i].title+'</label>\n' +
                '                        </div>\n' +
                '                    </li>')
        }

    }


}

loadTodos()
