fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todo => {
    const redo = todo.reduce( (uid, ttl) => {
        ttl.completed 
        ? uid 
        : uid.push({userId: ttl.userId, title: ttl.title});
        return uid;
    }, []);
    console.log(redo)
});