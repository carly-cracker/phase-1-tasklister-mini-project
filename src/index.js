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
    newTask.value = ""    

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "clear"
    deleteBtn.style.marginLeft = "10px"
    deleteBtn.style.fontSize = "15px"
    deleteBtn.addEventListener("click", ()=>{
      taskString.remove()
    })
    taskString.appendChild(deleteBtn)
    
    const prioritySelect = document.getElementById("task-priority")
    const priorityValue =  prioritySelect.value

    switch(priorityValue){
      case"high":
      taskString.style.color= "red"
      break
      case"medium":
      taskString.style.color= "orange"
      break
      case"low":
      taskString.style.color= "green"
      break
    }

    const editbtn = document.createElement("button")
    editbtn.innerHTML = "🖋️"
    editbtn.style.fontSize = "15px"
    editbtn.addEventListener("click", ()=>{
      const newText = prompt("Edit your task:", newTask.value)
      taskString.firstChild.textContent= newText
    })
    taskString.appendChild(editbtn)
    taskString.appendChild(deleteBtn)
    
  }

});
