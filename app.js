//make add button and enter in input field run addTask function
document.getElementById('add-btn').addEventListener('click', () => {
    if (taskField.value !== "") {
        addTask();
    }
});

//defining global variables
let taskField = document.getElementById('task-input');
const tasks = [];

//ensure that enter in task-input does not result in default behavior, but is the same as pressing add-btn
taskField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('add-btn').click();
    }
});
function addTask(){
    console.log(taskField.value);
    tasks.push(taskField.value);
    refreshList();

    taskField.value = "";
} 

function refreshList() {
    let taskHTML;
    for (i = 0; i < tasks.length; i++) {
        taskHTML += 
        `<li>
            <input type="checkbox"> ${tasks[i]}
        </li>`
    }
    document.getElementById('task-list').innerHTML = taskHTML; 
}