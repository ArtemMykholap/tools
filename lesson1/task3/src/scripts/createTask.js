// import { tasks } from './tasks.js';
import { renderTasks, listElem } from './render.js';
import { createTask, getTasksList } from './tasksGateway.js'
// export const createBtn = document.querySelector('.btn');


function onCreateTask(event) {

    const input = document.querySelector('.task-input');
    if (!input.value) { return }




    const newTask = {

        text: input.value,
        done: false,
        // id: Math.random().toString(),
        date: new Date().toISOString(),
        doneDate: undefined,
    }
    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {

            renderTasks(newTasksList);
        })
    input.value = '';


}
export { onCreateTask }