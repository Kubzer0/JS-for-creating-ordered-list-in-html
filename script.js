const ToDo = function () {
    this.tasks = []
}

ToDo.prototype.addTask = function (text) {
    this.tasks.push(new Task(text))
    this.render()
}

ToDo.prototype.render = function () {
    document.body.innerHTML = ''
    const orderedList = document.createElement('ol')
    this.tasks.forEach(task => {
        const taskLi = document.createElement('li')
        taskLi.innerText= task.text
        orderedList.appendChild(taskLi)
    })
    document.body.appendChild(orderedList)
}

function Task(text) {
    this.text = text
}

const newTask1 = new ToDo()
newTask1.addTask('task1111')


