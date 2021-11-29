const addNewItem = (list, value, currentIndex) => {
  const item = document.createElement('li')
  const deleteButton = document.createElement('button')

  item.classList.add('list__item')
  item.innerHTML = `
    <input class="list__checkbox" type="checkbox" id="${value}-${currentIndex}">
    <label for="${value}-${currentIndex}">${value}</label>  
  `
  deleteButton.innerHTML = `
    <button type="button" class="list__delete">
      <i class="far fa-trash-alt"></i>
    </button>
  `
  deleteButton.setAttribute('type','button')
  deleteButton.classList.add('list__delete')
  deleteButton.addEventListener('click',removeItem)

  item.appendChild(deleteButton)
  list.append(item)   
}

const removeItem = (e) => {
  const li = e.target.closest('.list__item')
  li.remove()  
}

const todoList = () => {
  const addButton = document.querySelector('[data-add]');
  const list = document.querySelector('[data-list]');
  const input  = document.querySelector('[data-input]');
  const messageError = document.querySelector('[data-error]');
  let currentIndex = 0 

  addButton.addEventListener('click', () => {
    if (input.value === '') {
      messageError.classList.remove('hidden')
      input.focus()
      return
    }

    addNewItem(list, input.value, currentIndex)
    currentIndex++
    input.value = ''
    messageError.classList.add('hidden')
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
