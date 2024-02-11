//Create a simple to-do list application using HTML, CSS, and JavaScript. 
//Use arrow functions for all callback functions and array methods.


let tasks = [];

document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ id: Date.now(), task, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});

const renderTasks = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.task;
        taskItem.className = task.completed ? 'completed' : '';
        taskItem.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });
        taskList.appendChild(taskItem);
    });
};

document.getElementById('filter-all').addEventListener('click', () => renderTasks());
document.getElementById('filter-active').addEventListener('click', () => {
    const activeTasks = tasks.filter(task => !task.completed);
    renderFilteredTasks(activeTasks);
});
document.getElementById('filter-completed').addEventListener('click', () => {
    const completedTasks = tasks.filter(task => task.completed);
    renderFilteredTasks(completedTasks);
});

const renderFilteredTasks = (filteredTasks) => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.task;
        taskItem.className = task.completed ? 'completed' : '';
        taskList.appendChild(taskItem);
    });
};
