import { newTask } from './newTask';

const app = {
  init: function () {
    newTask.init();
  }
}

document.addEventListener('DOMContentLoaded', app.init);