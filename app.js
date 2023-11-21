//make add button and enter in input field run addTask function
document.getElementById('add-btn').addEventListener('click', () => {
    if (taskField.value !== "") {
        addTask();
    }
});

//defining global variables
let taskField = document.getElementById('task-input');
let tasks = [];

//ensure that enter in task-input does not result in default behavior, but is the same as pressing add-btn
taskField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('add-btn').click();
    }
});
//add task to list, refresh inner html of list, clear input field
function addTask(){
    console.log(taskField.value);
    tasks.push(taskField.value);
    refreshList();

    taskField.value = "";
} 
//refresh the inner html of the list
function refreshList() {
    let taskHTML = "";
    tasks.forEach((taskContent, taskIndex) => {
        taskHTML += 
            `<li id="li-${taskIndex}">
                <div>
                    <input type="checkbox" onclick="taskRemove(${taskIndex});" id="checkbox-${taskIndex}">
                        <span> ${taskContent}</span>
                </div>
            </li>`
    });
    
    document.getElementById('task-list').innerHTML = taskHTML; 
    console.log(tasks);
}
//take task to be removed, copy every other task to a new array, then overwrite the old one. refresh the inner html of the list at the end 
function taskRemove(taskIndex) {
    updatedTasks = [];
    let toRemove = taskIndex;

    for (j = 0; j < tasks.length; j++) {
        if (taskIndex !== j){
            updatedTasks.push(tasks[j]);
        }
    }
    tasks = updatedTasks;
    refreshList();
    return removedTask;
}