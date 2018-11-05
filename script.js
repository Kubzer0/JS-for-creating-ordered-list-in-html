const ToDo = function () {
    this.tasks = []
}

ToDo.prototype.addTask = function (text) {
    this.tasks.push(new Task(text))
    this.render()
}

ToDo.prototype.render = function () {
    document.body.innerHTML = ''
    this.tasks.forEach(task => {
        const taskDiv = document.createElement('div')
        const taskText = document.createTextNode(task.text)
        taskDiv.appendChild(taskText)
        document.body.appendChild(taskDiv)
    })
}

function Task(text) {
    this.text = text
}

const newTask1 = new ToDo()
newTask1.addTask('task1111')


