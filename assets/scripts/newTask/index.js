const newTask = {
  todoTaskList: document.querySelector('.listsContainer__taskContainer--todo'),
  newTaskForm: document.querySelector('.formContainer__form'),
  newTaskInput: document.querySelector('.formContainer__formNewTask--input'),
  alertBox: document.querySelector('#alertBox'),

  init: function () {
    newTask.newTaskForm.addEventListener('submit', newTask.handleSubmitForm);
  },

  handleSubmitForm: function (event) {
    event.preventDefault();
    newTask.createNewTask(newTask.getInputValue());
    newTask.newTaskForm.reset();
    newTask.newTaskInput.focus();
  },

  getInputValue: function () {
    let newTaskInputValue = newTask.newTaskInput.value;
    return newTaskInputValue;
  },

  createNewTask: function (newTaskValue) {
    const date = new Intl.DateTimeFormat('en-US',
      {
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(Date.now());
    const taskTemplate = document.querySelector('#taskTemplate').content.cloneNode(true);
    // Task label
    taskTemplate.querySelector('.task__infos-text-label').textContent = newTaskValue;
    // Task time creation
    taskTemplate.querySelector('.task__infos-text-time').textContent = date;

    // Display alert if new task input is empty
    if (!newTaskValue) {
      newTask.removeAlerts(newTask.alertBox);
      newTask.alertBox.appendChild(newTask.createAlert());
    } else {
      newTask.removeAlerts(newTask.alertBox);
      newTask.addNewTaskToList(taskTemplate);
    }
  },

  addNewTaskToList: function (newTaskToAdd) {
    newTask.todoTaskList.prepend(newTaskToAdd);
    taskState.init();
    deleteTask.init();
  },

  createAlert: function () {
    const alert = document.createElement('p');
    alert.setAttribute('class', 'alert');
    alert.textContent = 'The field can\'t be empty !';
    return alert;
  },

  removeAlerts: function (alertContainer) {
    const messages = alertContainer.querySelectorAll('.alert');
    for (const message of messages) {
      message.remove();
    }
  }
}