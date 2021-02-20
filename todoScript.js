// Add Entry Function:
// Create a new <li> for inputed value of todoEntry when Add Entry is clicked
var todoEntry = document.getElementById("todoEntry");
var currList = document.getElementById('todoList');
var items = document.getElementsByClassName("item");

// input from HTML -> calls addTodo when Add Entry is clicked
document.getElementById("addEntryButton").onclick = function() {addTodo()};


// adds a todo item into the list; does not accept two entries with the same name
function addTodo() {
  // alert("add");
  var entryName = todoEntry.value;

  for(var i = 0; currList.getElementsByClassName("incomplete").length > i; i++){
    if (currList.getElementsByClassName("incomplete")[i].id == entryName) {
      return;
    }
  }

  for(var i = 0; currList.getElementsByClassName("complete").length > i; i++){
    if (currList.getElementsByClassName("complete")[i].id == entryName) {
      return;
    }
  }

  if (entryName != ""){
    newTodo(entryName);
  }
  
}


// constructor of a new todo item
function newTodo(entryName) {

    var a = document.createElement("a");
    var link = document.createTextNode(entryName);
    a.appendChild(link);
    a.title=entryName;
    a.href= "#0" ;

    var newListElement = document.createElement("li");
    newListElement.id = entryName;

    newListElement.appendChild(a);
    currList.appendChild(newListElement);
    
    newListElement.addEventListener("dblclick", completeState);
    newListElement.addEventListener("click", select);
  
    newListElement.classList.add("incomplete");

}


// Remove Function:
var removeSelect = document.getElementById("removeSelectedButton");
removeSelect.onclick = function() {remove()};


// if selectList is null, do nothing
// otherwise set every element of selectList as removed
function remove(){
  var selected = currList.getElementsByClassName("selected");

  while (selected.length > 0){
    selected.item(0).remove();
  }
  
}

// Select Function:
function select(){
  // alert(selected);
  if (this.classList.contains("selected")){
    this.classList.remove("selected");
    document.getElementById(this.id).style.color = 'black';
  } else {
    this.classList.add("selected");
    document.getElementById(this.id).style.color = 'coral';
  }

}



// Refresh List Function:
// removes all completed items from the todoList
var refreshList = document.getElementById("refreshListButton");
refreshList.onclick = function(){refresh()};

function refresh(){
  // alert("refresh clicked");
  var completed = currList.getElementsByClassName("complete");

  while (completed.length > 0){
    completed.item(0).remove();
  }

}


// Complete Function:
// change the state of
function completeState(e){
  // alert("complete");
  if (this.classList.contains("incomplete")){
    this.classList.remove("incomplete");
    this.classList.add("complete");
    document.getElementById(this.id).style.textDecoration = "line-through";
    
  } else {
    this.classList.remove("complete");
    this.classList.add("incomplete");
    document.getElementById(this.id).style.textDecoration = "none";
    
  }
}


// // Save Function:
// // save the todolist to the local storage of the user's computer
// document.getElementById("saveButton").onclick = function() {save()};


// function save(){
//   alert("saved");
//   var savedItems = [];

//   var length = currList.children.length;
//   var i = 0;

//   while(length > i) {
//     var currTodo = currList.children.item(i);
//     var info = {
//       "completed": currTodo.classList.contains("complete"),
//       "todo": currTodo.innerHTML
//     };

//     savedItems.push(info);
//     i++;

//   }
//   localStorage.setItem("savedItems", JSON.stringify(savedItems));
//   alert("saved");
// }

// // Load Function:
// // load a saved list of todos from the local storage if saved list is not null
// function load(){

//   if (localStorage.getItem("savedItems") == null){
//     return;
//   } 
  
//   var savedItems = JSON.parse(localStorage.getItem("savedItems"));

//   var length = savedItems.length;
//   var i = 0;

//   while(length > i) {
//     var currTodo = savedItems[[i]];
//     newTodo(currTodo.task, currTodo.complete);
//   }

  
// }

// loadlist();


