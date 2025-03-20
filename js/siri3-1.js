let taskStack = [];
let taskListElement = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskName = document.getElementById("taskName").value;
    if (taskName) {
        taskStack.push(taskName);
        updateTaskList();
        document.getElementById("taskName").value = ""; // Clear input
    }
}

// Function to undo the last task
function undoTask() {
    taskStack.pop();
    updateTaskList();
}

// Function to update the task list display
function updateTaskList() {
    taskListElement.value = taskStack.join("\n");
}

// Event listeners for buttons
document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("undoTaskBtn").addEventListener("click", undoTask);
