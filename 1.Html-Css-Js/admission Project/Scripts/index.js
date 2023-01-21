// Write code related to Home page here 
let form=document.querySelector("form")
let taskList=JSON.parse(localStorage.getItem("task-list"))||[]

form.addEventListener("submit",addtask)
 
function addtask(event){
    
    event.preventDefault();
    let obj={
        name:form.name.value,
        desc:form.desc.value,
        start:form.start.value,
        end:form.end.value,
        priority:form.priority.value,
        id:Date.now()
    }
    console.log(obj)
    taskList.push(obj)
   localStorage.setItem("task-list",JSON.stringify(taskList))
}
