import { renderTasks, listElem } from './list/render.js';
import { updateTask } from './list/update.js';
import { onCreateTask } from './list/createTask.js';
import { getTasksList } from './list/tasksGateway.js';
import { onDeleteTask } from './list/delete.js';
import './index.scss'



listElem.addEventListener('click', updateTask);
const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', onCreateTask);
listElem.addEventListener('click', onDeleteTask);


getTasksList()
    .then(serverTasks => {

        renderTasks(serverTasks);
    })