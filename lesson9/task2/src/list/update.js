// import { tasks } from './tasks.js';
import { renderTasks } from './render';
// import { createTask } from './createTask.js';
import { updateServerTask, getTasksList } from './tasksGateway';

function updateTask(event) {
  getTasksList()
    .then((tasks) => {
      const classes = event.target.classList;
      if (!classes.contains('list__item-checkbox')) { return; }
      const tar = event.target;
      const task = tasks.find((el) => el.id === event.target.dataset.taskId);
      task.done = tar.checked;
      task.doneDate = new Date();
      updateServerTask(task)
        .then(() => renderTasks(tasks));
    });
}
export { updateTask };
