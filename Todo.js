var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");
window.setTimeout(function() {
  while(input !== "quit") {
    //handle input
    if(input === "list") {
      listTodos();
    } else if(input === "new") {
      inputNewTodo();
    } else if(input === "delete") {
      deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
  }
  console.log("OK you quit the app");
}, 500);

function listTodos() {
  todos.forEach(function(todo, index) {
    console.log("**********");
    console.log(index + ": " + todo);
    console.log("**********");
  });
}

function inputNewTodo() {
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("todo added");
}

function deleteTodo() {
  //input index of which item to delete
  var deleteTodo = prompt("Which todo to remove");
  //remove todo by index, and state how many to remove
  todos.splice(deleteTodo, 1);
  console.log("todo/s deleted");
}
