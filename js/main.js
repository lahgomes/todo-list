const addNewItem = (list, value) => {
  const item = document.createElement('li')
  item.classList.add('list__item')
  item.innerHTML = `
  <input class="list__checkbox" type="checkbox" id="${value}">
  <label for="${value}">${value}</label>
  <button type="button" data-delete="${value}" class="list__delete" data-delete><i class="far fa-trash-alt"></i></button>
  `
  list.append(item)
  removeItem()  
}

const removeItem = () => {
  const deleteButtons = document.querySelectorAll('[data-delete]')
  
    deleteButtons.addEventListener('click', (event) => {
      const li = event.target('.list__item')
      li.remove()
    })    
  
}

const todoList = () => {
  const addButton = document.querySelector('[data-add]');
  const list = document.querySelector('[data-list]');
  const input  = document.querySelector('[data-input]');  

  addButton.addEventListener('click', (event) => {
    addNewItem(list, input.value)
    input.value = ''
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
