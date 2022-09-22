const getTodosHandler = async() =>{
   const response = await fetch('http://localhost:4000/api/todos')
   const xmlResponse = await response.text()
   const data = new window.DOMParser().parseFromString(
     xmlResponse,
     "text/xml"
   );

  //  Use DOM to show the response
  const todoRoot = data.querySelector('todos')
  const todos = [...todoRoot.getElementsByTagName('todo')]
  const todosCards = `
    ${todos.map( todo => `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${todo.querySelector('title').innerHTML} (id : ${todo.getAttribute('id')})</h5>
        <div class="card-text">description: ${todo.querySelector('description').innerHTML}</div>
      </div>
    </div>`)}
  `
  const todosDiv = document.getElementById("todos")
  todosDiv.innerHTML += todosCards
  document.innerHTML += todosDiv
}

getTodosHandler().then(()=>{})