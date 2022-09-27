fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())  
  .then(todo => {
    console.log(todo)
    const uncompleted = todo.filter( 
        (todo) => todo.completed == false).map( 
            todo => ({ userID : todo.Id, title : todo.title
        }));
    console.log(uncompleted)
  });