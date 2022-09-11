const filters = {
  init: function () {
    const filterbuttons = document.querySelectorAll('.filterContainer__button ');
    for (const button of filterbuttons) {
      button.addEventListener('click', filters.handleFilterClick);
    }
  },

  handleFilterClick: function (event) {
    filters.listFilter(event.target);
  },

  listFilter: function (currentFilter) {
    const filterbuttons = document.querySelectorAll('.filterContainer__button ');
    filters.removeActiveFilterStyle(filterbuttons);
    currentFilter.classList.add('activeFilter');
    const todoList = document.querySelector('.listsContainer__list--todo');
    const doneList = document.querySelector('.listsContainer__list--done');
    switch (currentFilter.classList[1]) {
      case 'filterContainer__button--todo':
        todoList.classList.remove('hidden');
        doneList.classList.add('hidden');
        break;
      case 'filterContainer__button--done':
        doneList.classList.remove('hidden');
        todoList.classList.add('hidden');
        break;
      default:
        doneList.classList.remove('hidden');
        todoList.classList.remove('hidden');
        doneList.classList.add('visible');
        todoList.classList.add('visible');
        break;
    }
  },

  removeActiveFilterStyle: function (buttons) {
    for (const button of buttons) {
      button.classList.remove('activeFilter');
    }
  }
}