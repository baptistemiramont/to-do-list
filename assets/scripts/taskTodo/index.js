import { taskDone } from '../taskDone';

export const taskTodo = {
  doneTaskList: document.querySelector('.listsContainer__taskContainer--done'),

  init: function () {
    console.log('taskTodo init');
    taskTodo.getUnfinishedTasks();
  },

  getUnfinishedTasks: function () {
    const tasks = document.querySelectorAll('.listsContainer__taskContainer--todo li');
    for (const task of tasks) {
      const checkBox = task.querySelector('.task__checkbox');
      checkBox.addEventListener('click', taskTodo.handleUncheckedBox);
    }
  },

  handleUncheckedBox: function (event) {
    const currentTask = event.target.parentNode.parentNode;
    taskTodo.doneTaskList.appendChild(currentTask);
    taskDone.init();
  },
}