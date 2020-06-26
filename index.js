var addButton = document.getElementById("add-button");
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
var clearButton = document.getElementById("clear-button");
var emptyButton = document.getElementById("empty-list");
var saveButton = document.getElementById("save-list");

addButton.addEventListener("click", addToDoItem);
toDoEntryBox.addEventListener("keydown", function(event){
  if (event.keyCode === 13){
    addButton.click();
  }
})
clearButton.addEventListener("click", clearCompletedItems);
emptyButton.addEventListener("click", emptyList);
saveButton.addEventListener("click", saveList);

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
    // alert(itemText);
}

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
    
    toDoEntryBox.value = "";
 }

 function toggleToDoItemState() {
     if (this.classList.contains("completed")) {
         this.classList.remove("completed");
         } else {;
         this.classList.add("completed");
         }
 }

function clearCompletedItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0){
        completedItems.item(0).remove();
   }
}
    
function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length >0){
        toDoItems.item(0).remove();
    }
}

// function saveList() {
//     alert("Haven't written the Save function yet");
// }

function saveList() {
  var myArray = [];
  
  for (i=0; i < toDoList.children.length; i++){ 
    var toDoItem = toDoList.children.item(i);
    var toDoInfo = {
      "task": toDoItem.textContent,
      "completed": toDoItem.classList.contains("completed")
    };
    myArray.push(toDoInfo);
    localStorage.setItem("myArray", JSON.stringify(myArray));
  }
}

function loadList(){
  if(localStorage.getItem("savedList") != null){
    var savedList = JSON.parse(localStorage.getItem("savedList"));

    for(i = 0; i < savedList.length; i++) {
      var savedItem = savedList[i];
      newToDoItem(savedItem.task,savedItem.completed);
    }
  }
}

loadList();
