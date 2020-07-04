import { getTasksList, deleteTask } from './tasksGateway';
import { renderTasks } from './render';

export function onDeleteTask() {
  const deleteButton = event.target.classList.contains('list-item__delete-btn');
  if (!deleteButton) return;

  const idElem = event.target.parentNode.firstElementChild.dataset.taskId;

  deleteTask(idElem)
    .then(() => getTasksList())
    .then((response) => {
      renderTasks(response);
    });
}
