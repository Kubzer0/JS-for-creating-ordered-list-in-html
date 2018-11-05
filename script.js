class ToDo {
    constructor() {
        this.tasks = []

        this.render()
    }
    addTask(text) {
        this.tasks.push(new Task(text))
        this.render()
    }
    render() {

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
    makeUI() {
        const input = document.createElement('input')
        const button = document.createElement('button')

        button.addEventListener('click', () => this.addTask(input.value))
        document.body.appendChild(input)
        button.innerText = "dodaj do listy"
        document.body.appendChild(button)
    }

}


class Task {
    constructor(text) {
        this.text = text
    }
}


const newTask1 = new ToDo()



