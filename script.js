document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    addTaskButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            addTask(taskValue);
            taskInput.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="remove-btn">Remove</button>
        `;
        todoList.appendChild(li);

        const removeButton = li.querySelector('.remove-btn');
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
    }
});

