import { taskTodo } from '../taskTodo';

export const taskDone = {
  todoTaskList: document.querySelector('.listsContainer__taskContainer--todo'),

  init: function () {
    console.log('taskDone init');
    taskDone.getFinishedTasks();
  },

  getFinishedTasks: function () {
    const tasks = document.querySelectorAll('.listsContainer__taskContainer--done li');
    for (const task of tasks) {
      const checkBox = task.querySelector('.task__checkbox');
      checkBox.addEventListener('click', taskDone.handleCheckedBox);
    }
  },

  handleCheckedBox: function (event) {
    const currentTask = event.target.parentNode.parentNode;
    taskDone.todoTaskList.appendChild(currentTask);
    taskTodo.init();
  },
}