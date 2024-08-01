
let workingTasks = document.querySelector('.working-tasks')
let iconPre = document.querySelectorAll('.icon-pre')
let icon = document.querySelectorAll('.icon')

function createTaskBlock(nameTask){
    let blockTask = document.createElement('div')
    blockTask.classList.add('task')
    let textTask = document.createElement('p')
    textTask.classList.add('text-task')
    textTask.textContent = nameTask
    let icon = document.createElement('div')
    icon.classList.add('icon')
    icon.textContent = '🛈'
    let iconPre = document.createElement('pre')
    iconPre.classList.add('icon-pre')
    blockTask.append(textTask)
    blockTask.append(icon)
    icon.append(iconPre)
    workingTasks.appendChild(blockTask)

    return blockTask
}



