import { newTask } from './newTask';

const app = {
  init: function () {
    console.log('app init');
    newTask.init();
  }
}

document.addEventListener('DOMContentLoaded', app.init);