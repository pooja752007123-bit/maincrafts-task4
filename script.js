let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(list = tasks) {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    list.forEach((task, index) => {

        taskList.innerHTML += `
        <li>
            ${task}

            <button onclick="editTask(${index})">Edit</button>

            <button onclick="deleteTask(${index})">Delete</button>
        </li>
        `;
    });
}

function addTask() {

    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") {

        alert("Please enter a task");
        return;
    }

    tasks.push(input.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    displayTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

function editTask(index) {

    let newTask = prompt("Edit Task", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {

        tasks[index] = newTask;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }
}

function searchTasks() {

    const search = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const filtered = tasks.filter(task =>
        task.toLowerCase().includes(search)
    );

    displayTasks(filtered);
}

displayTasks();
