import "core-js/modules/es.promise";
const baseUrl = 'https://5ef08099ad6d71001617a47b.mockapi.io/api/v1/task';
export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};
export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export const updateServerTask = taskData => {
  return fetch("".concat(baseUrl, "/").concat(taskData.id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export const deleteTask = id => {
  return fetch("".concat(baseUrl, "/").concat(id), {
    method: 'DELETE'
  });
};