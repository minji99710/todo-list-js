const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
// to save/update todo list in local storage
let toDos = []; // cant assign things to const variables, which means it's not allowed to update.
const TODO_KEY = "todos";

// save todo list to the local storage
function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); // change JS object/array to string(so that it can be saved in localStorage with the shape)
}

// X button clicks => delete the clicked todo list
function deleteToDo(event) {
  const li = event.target.parentElement; // event.target : what button was clicked
  // restore a new toDo list that removed the deleted list
  toDos = toDos.filter((item) => item.id !== parseInt(li.id)); // li.id is string
  console.log("after removed..", toDos);
  saveToDo();
  li.remove();
}

// write the todo list & delete it
function paintToDo(newToDoObj) {
  // <ul id="todo-list"><li><span> newToDoObj [X] </span></li></ul>
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "DELETE";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);

  toDoList.appendChild(li);
}

// add the todo list & save it to the local storage
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = { text: newToDo, id: Date.now() }; // to find the specific list to delete
  toDos.push(newToDoObj);
  console.log("after adding..", toDos);
  paintToDo(newToDoObj);
  saveToDo();
}

// item: the element in an array that's being processed in forEach

const savedToDos = localStorage.getItem(TODO_KEY);
// if there are saved lists, then show them first
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // turn string back to JS object/array
  // start the screen with the previously saved lists
  toDos = parsedToDos; // if there are saved todo list, then save those previous lists
  // execute a function for each element in array
  parsedToDos.forEach(paintToDo); // write each todo list that are saved
}

toDoForm.addEventListener("submit", handleToDoSubmit);
console.log(toDos);
// filter : create a new array only with the elements that return True(the parameter function specifies what should remain)
