const startApplication = () => {
  const buttonStart = document.querySelector ('[data-button]');
  const presentation = document.querySelector ('[data-presentation]');
  const list = document.querySelector ('[data-list]');

  buttonStart.addEventListener('click', (event) => {
    event.preventDefault();    
    list.classList.remove('hidden')
    presentation.classList.add('hidden')
  })
}

startApplication()
