import { renderTasks, listElem } from './render.js';
import { updateTask } from './update.js';
import { onCreateTask } from './createTask.js';
import { getTasksList } from './tasksGateway.js';
import { onDeleteTask } from './delete.js';
listElem.addEventListener('click', updateTask);
const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', onCreateTask);
listElem.addEventListener('click', onDeleteTask);
getTasksList().then(serverTasks => {
  renderTasks(serverTasks);
});