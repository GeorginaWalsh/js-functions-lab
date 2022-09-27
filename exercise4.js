fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todo => {
     const ttlComp = todo.reduce( (n, t) => 
          t.completed ? n+1 : n
     ,0
     )
     console.log(ttlComp)
  })
  .catch(function(err) { 
    console.log(err);
  });