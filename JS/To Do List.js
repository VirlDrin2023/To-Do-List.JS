document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const clearAllBtn = document.getElementById("clearAllBtn");

  // Add new task when "Add" button is clicked or Enter key is pressed
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // Function to add a new task to the list
  function addTask() {
    const taskText = taskInput.value.trim(); // Get the value of the input field and trim whitespace
    if (taskText === "") {
      alert("Please enter a task!");
      return; // Prevent adding empty tasks
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a "Delete" button and append to the list item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    li.appendChild(deleteBtn);

    // Add the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Event listener for marking tasks as completed
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Event listener for deleting a task
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the click event from bubbling up to the li
      taskList.removeChild(li);
    });
  }

  // Clear all tasks when "Clear All" button is clicked
  clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = ""; // Remove all list items
  });
});
