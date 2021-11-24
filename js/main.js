const addNewItem = (list, value) => {
  const item = document.createElement('li')
  item.classList.add('list__item')
  item.innerHTML = `
  <input class="list__checkbox" type="checkbox" id="check01">
  <label for="check01">${value}</label>
  `
  list.append(item)
}

const todoList = () => {
  const addButton = document.querySelector('[data-add]');
  const list = document.querySelector('[data-list]');
  const input  = document.querySelector('[data-input]');
  addButton.addEventListener('click', (event) => {
    addNewItem(list, input.value)
  })  
  
}

const startApplication = () => {
  const buttonStart = document.querySelector('[data-button]');
  const presentation = document.querySelector('[data-presentation]');
  const list = document.querySelector('[data-todolist]');

  buttonStart.addEventListener('click', (event) => {
    event.preventDefault();    
    list.classList.remove('hidden')
    presentation.classList.add('hidden')
  })
  todoList()
}

startApplication()
