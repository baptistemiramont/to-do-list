import { newTask } from './newTask';
import { filters } from './filters';

const app = {
  init: function () {
    newTask.init();
    filters.init();
  }
}

document.addEventListener('DOMContentLoaded', app.init);