var addButton = document.getElementById("add-button");
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
var clearButton = document.getElementById("clear-button");

addButton.addEventListener("click", addToDoItem);
clearButton.addEventListener("click", clearCompletedItems);

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

function clearCompletedItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0){
        completedItems.item(0).remove();
   }
}
    



