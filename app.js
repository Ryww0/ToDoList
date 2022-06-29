const btnAddTask = document.querySelector(".cross");
const inputAddTask = document.querySelector(".input-task");
const tasks = document.querySelector(".tasks");

function addTask() {
  let newTask = document.createElement("div");
  if (inputAddTask.value === "") {
    return;
  } else {
    newTask.innerHTML = `<div class="task flex m15"><p>${inputAddTask.value}</p></div>`;
    tasks.append(newTask);
    // after the new task is added, delete the input content
    inputAddTask.value = "";
  }
}

// Add the task user's wrote when he click on the button
btnAddTask.addEventListener("click", addTask);
// Add the task user's wrote when he press enter on his keyboard
inputAddTask.addEventListener("keydown", function (e) {
  let newTask = document.createElement("div");
  // Only on enter key (keycode for enter is 13)
  if (e.keyCode === 13) {
    if (inputAddTask.value === "") {
      return;
    } else {
      newTask.innerHTML = `<div class="task flex m15"><p>${inputAddTask.value}</p></div>`;
      tasks.append(newTask);
      // after the new task is added, delete the input content
      inputAddTask.value = "";
    }
  }
});
