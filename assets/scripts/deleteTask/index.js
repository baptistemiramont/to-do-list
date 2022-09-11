export const deleteTask = {
  init: function () {
    const tasks = document.querySelectorAll('.task');
    for (const task of tasks) {
      const currentTaskBin = task.querySelector('.task__trashIcon');
      currentTaskBin.addEventListener('click', deleteTask.handleDeleteTask);
    }
  },

  handleDeleteTask: function (event) {
    event.target.parentNode.remove();
  }
}