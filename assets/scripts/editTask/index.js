const editTask = {

  init: function () {
    const tasksLabel = document.querySelectorAll('.task__infos-text-label');
    for (const task of tasksLabel) {
      task.addEventListener('click', editTask.handleTaskLabelClick);
    }
  },

  handleTaskLabelClick: function (event) {
    editTask.editCurrentTask(event);
  },

  handleValidateNewTaskLabel: function (event) {
    const currentTaskLabel = event.target.previousSibling.previousSibling;
    const alertEmptyLabel = document.createElement('p');
    alertEmptyLabel.setAttribute('class', 'alert');
    alertEmptyLabel.textContent = 'Task name can\'t be empty';

    if (event.target.value !== '') {
      newTask.removeAlerts(document);
      currentTaskLabel.textContent = event.target.value;
      currentTaskLabel.classList.remove('hidden');
      event.target.classList.add('hidden');
    } else {
      newTask.removeAlerts(document);
      currentTaskLabel.closest('.task__infos-text').prepend(alertEmptyLabel);
      console.log(event.target);
    }
  },

  handleEnterKeyPress: function (event) {
    if (event.key === "Enter") {
      editTask.handleValidateNewTaskLabel(event);
    }
  },

  editCurrentTask: function (currentTask) {
    const currentTaskLabel = currentTask.currentTarget;
    const currentTaskInput = currentTask.currentTarget.nextSibling.nextSibling;

    currentTaskLabel.classList.add('hidden');
    currentTaskInput.classList.remove('hidden');

    currentTaskInput.focus();
    currentTaskInput.setAttribute('value', currentTask.target.textContent);

    currentTaskInput.addEventListener('blur', editTask.handleValidateNewTaskLabel);
    currentTaskInput.addEventListener('keypress', editTask.handleEnterKeyPress);
  }
}