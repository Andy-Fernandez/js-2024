class Task {
  constructor ( description, status = false, dueDate = new Date()){
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
  }
}

tasks = [];

tasks.addTask = function(description, dueDate){
  // Here I have to validate date
  if(dueDate instanceof Date && !isNaN(dueDate.getTime())){
    const task = new Task(description, false, dueDate);
    tasks.push(task);
  } else { 
    throw new Error("Invalid date");
  }
}

tasks.markComplete = function(index){
  if(typeof index !== "number" || index >= tasks.length || index < 0){ // Checkin if index is in taks lenght and check if index is a number
    throw new Error("Invalid task index");
  }
  tasks[index].status = !tasks[index].status;
}

tasks.listCompleteTasks = function(){
  let index = 1;
  tasks.forEach((task, index) => {
    if(!task.status){
      console.log(`${index + 1}. `, task);
    }
  });
}




// ########## TEST #############
// Test 1: Add a task
tasks.addTask("Complete homework", new Date("2025-01-10"));
tasks.addTask("Buy groceries", new Date("2025-01-12"));
tasks.addTask("Read a book", new Date("2025-01-15"));

console.log("Tasks after adding:");
console.log(tasks);

// Expected: tasks array should have 3 tasks with correct descriptions, dates, and status set to `true`.

// Test 2: Mark task as complete
tasks.markComplete(0);
console.log("Tasks after marking the first task complete:");
console.log(tasks[0]);

// Expected: The status of the first task should toggle from `true` to `false`.

// Test 3: List all completed tasks
console.log("Completed tasks:");
tasks.listCompleteTasks();
// Expected: Only tasks with `status: true` should be listed.

// Test 4: Add a task with an invalid date
try {
  tasks.addTask("Invalid task", "not-a-date");
} catch (e) {
  console.error("Error while adding invalid task:", e.message);
}

// Expected: It should throw an error or handle the invalid date gracefully.

