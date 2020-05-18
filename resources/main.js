var removeSVG = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>'
var completeSVG = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>'

//user clicked on add button.
//if there is any text inside the item field, add that text to the todo list.
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {addItemTodo(value);
    document.getElementById('item').value = '';
    }
});

//user presses enter
//if there is any text inside the item field, add that text to the todo list.
document.getElementById('item').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
    var value = document.getElementById('item').value;
    addItemTodo(value);
    document.getElementById('item').value = '';
    }
});

function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    
    parent.removeChild(item);
}

function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    
    //check if the item should be added to the completed list or to re-add to the todo list
    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

//Adds a new item to the todo list.
function addItemTodo(text) {
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    //add click event for removing item
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    //add click event for completing item
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
}