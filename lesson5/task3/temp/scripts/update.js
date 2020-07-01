// import { tasks } from './tasks.js';
import { renderTasks, listElem } from './render.js'; // import { createTask } from './createTask.js';

import { updateServerTask, getTasksList } from './tasksGateway.js';

function updateTask(event) {
  getTasksList().then(tasks => {
    const classes = event.target.classList;
    if (!classes.contains('list__item-checkbox')) return;
    const tar = event.target;
    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    task.done = tar.checked;
    task.doneDate = new Date(); // setTasks(tasks)

    updateServerTask(task).then(() => renderTasks(tasks)); // renderTasks(tasks)
  });
}

export { updateTask };