document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById("create-task-form")
  form.addEventListener("submit",handleFormSubmit)

  function handleFormSubmit(event){
    event.preventDefault()
    const tasks = document.getElementById("tasks")
    const newTask = document.getElementById("new-task-description")
    let taskString = document.createElement("p")
    console.log("happy")
    taskString.innerHTML = newTask.value
    
    tasks.appendChild(taskString)
    
  }
});
