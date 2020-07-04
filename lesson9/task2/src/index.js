import { renderTasks, listElem } from './list/render';
import { updateTask } from './list/update';
import { onCreateTask } from './list/createTask';
import { getTasksList } from './list/tasksGateway';
import { onDeleteTask } from './list/delete';
import './index.scss';

listElem.addEventListener('click', updateTask);
const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', onCreateTask);
listElem.addEventListener('click', onDeleteTask);

getTasksList()
  .then((serverTasks) => {
    renderTasks(serverTasks);
  });
