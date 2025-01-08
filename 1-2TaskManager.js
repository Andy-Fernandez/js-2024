class Task {
  constructor ( description, status = true, dueDate = new Date()){
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
  }
}

tasks = [];

tasks.addTaks = function(description, dueDate){
  // Here I have to validate date
  if(dueDate instanceof Date && !isNaN(dueDate.getTime())){
    const task = new Task(description, true, dueDate);
    tasks.push(task);
  } else { 
    throw new Error("Invalid date");
  }
}

tasks.markComplete = function(index){
  tasks[index].status = !tasks[index].status;
}

tasks.listCompleteTasks = function(){
  let index = 1;
  tasks.forEach(element => {
    if(element.status){
      console.log(`${index}. `, element);
      index++;
    }
  });
}

// ########## TEST #############
// Test 1: Add a task
tasks.addTaks("Complete homework", new Date("2025-01-10"));
tasks.addTaks("Buy groceries", new Date("2025-01-12"));
tasks.addTaks("Read a book", new Date("2025-01-15"));

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
  tasks.addTaks("Invalid task", "not-a-date");
} catch (e) {
  console.error("Error while adding invalid task:", e.message);
}

// Expected: It should throw an error or handle the invalid date gracefully.

