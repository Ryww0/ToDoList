const btnAddTask = document.querySelector(".cross");
const inputAddTask = document.querySelector(".input-task");

function addTask() {
  const tasks = document.querySelector(".tasks");
  let newTask = document.createElement("div");
  newTask.innerHTML = `<div class="task flex m15"><p>${inputAddTask.value}</p></div>`;
  tasks.append(newTask);
}

btnAddTask.addEventListener("click", addTask);
