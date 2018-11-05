const ToDo = function () {
    this.tasks = []
}

ToDo.prototype.addTask = function (text) {
    this.tasks.push(new Task(text))
    this.render()
}

ToDo.prototype.render = function () {

    document.body.innerHTML = ''

    this.makeUI()

    const orderedList = document.createElement('ol')
    this.tasks.forEach(task => {
        const taskLi = document.createElement('li')
        taskLi.innerText = task.text
        orderedList.appendChild(taskLi)
    })
    document.body.appendChild(orderedList)
}

function Task(text) {
    this.text = text
}

ToDo.prototype.makeUI = function () {
    const input = document.createElement('input')
    const button = document.createElement('button')

    button.addEventListener('click', () => this.addTask(input.value))
    document.body.appendChild(input)
    button.innerText = "dodaj do listy"
    document.body.appendChild(button)
}

const newTask1 = new ToDo()
newTask1.addTask('task1111')


