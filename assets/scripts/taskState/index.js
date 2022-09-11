const taskState = {
  doneTaskList: document.querySelector('.listsContainer__taskContainer--done'),
  todoTaskList: document.querySelector('.listsContainer__taskContainer--todo'),

  init: function () {
    const tasks = document.querySelectorAll('.task');
    for (const task of tasks) {
      const checkBox = task.querySelector('.task__checkbox');
      checkBox.addEventListener('click', taskState.handleCheckedBox);
    }
  },

  handleCheckedBox: function (event) {
    const tasks = document.querySelectorAll('.task');
    const currentTask = event.target.parentNode.parentNode;
    if (event.target.checked) {
      taskState.doneTaskList.appendChild(currentTask);
    } else if (!event.target.checked) {
      taskState.todoTaskList.appendChild(currentTask);
    } else {
      console.error('Task state script error');
    }
  }
}