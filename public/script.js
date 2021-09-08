window.onload = () => {
  fetch('/todo', {
    method: 'GET'
  })
  .then((res) => res.json())
  .catch((body) => {
    const todoBody = document.getElementById('todo-body')
    
  })


}