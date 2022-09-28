fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todo => {
    const compCount = todo.reduce( (n, t) => {
        if(t.completed) {
            n[t.userId] === undefined ? (n[t.userId] = 1 ) 
        : (n[t.userId] += 1);
        }
        return n;
    }, {});
    console.log(compCount);
  });