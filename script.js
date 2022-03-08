let toDo = [];

function addTask(){
    // asks user for task
    let task = prompt("Enter Task: ");
    //adds task to array
    toDo.push(task);
    //display the tasks
    displayTasks();
}

function displayTasks(){
    //clear task list
    document.getElementById("toDoList").innerHTML+="";
    for(let x=0;x<toDo.length;x++){
        //display the task
        document.getElementById("toDoList").innerHTML+=`
        <li id="${x}"> ${toDo[x]} <button onclick="deleteTask(${x});"> Delete </button> </li>
        `;
    }
}
function deleteTask(id){
    document.getElementById(id).remove(); //remove element from HtmL
    toDo.splice(id, 1);// remove the element from the array
}