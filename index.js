var addButton = document.getElementById("add-button");
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

addButton.addEventListener("click", addToDoItem);

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
 }

 function toggleToDoItemState() {
     if (this.classList.contains("completed")) {
         this.classList.remove("completed");
         } else {;
         this.classList.add("completed");
         }
 }


    



