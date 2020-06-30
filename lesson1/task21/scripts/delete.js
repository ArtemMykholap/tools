import { getTasksList, deleteTask } from './tasksGateway.js';
import { renderTasks } from './render.js';


export function onDeleteTask() {

    const deleteButton = event.target.classList.contains('list-item__delete-btn');
    if (!deleteButton) return;

    const idElem = event.target.parentNode.firstElementChild.dataset.taskId;
    console.log(event)

    deleteTask(idElem)
        .then(() => getTasksList())
        .then((response) => {
            renderTasks(response);
        });
};