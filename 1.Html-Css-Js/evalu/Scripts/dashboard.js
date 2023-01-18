// Write code related to dashboard page here
let taskList=JSON.parse(localStorage.getItem("task-list"))||[]
let prioList=JSON.parse(localStorage.getItem("priority-list"))||[]
display(taskList)
document.querySelector("#filter").addEventListener("change",()=>{
    let fil=taskList;
    let value=document.querySelector("#filter").value
    if(value!=""){fil=taskList.filter((e)=>{
        return e.priority==value
    })}
    display(fil)
})

function display(arr){
    document.querySelector("tbody").innerHTML="";
    document.querySelector("#task-count").innerText=arr.length;
   
    arr.forEach((e,i) => {
       
        let tr=document.createElement("tr");
        let name= document.createElement("td");
        name.innerText=e.name;
        let desc= document.createElement("td");
        desc.innerText=e.desc;
        let start= document.createElement("td");
        start.innerText=e.start;
        let end= document.createElement("td");
        end.innerText=e.end;
        let priority= document.createElement("td");
        priority.innerText=e.priority;
        let add= document.createElement("td");
        add.innerText="Add";
        add.addEventListener("click",function(){
            addTo(e)
        })
        
        tr.append(name,desc,start,end,priority,add)
        document.querySelector("tbody").append(tr)
    });
    
}
function addTo(obj){
    
    taskList=taskList.filter((e)=>{
        return e.id!=obj.id
    })
    prioList.push(obj)
    localStorage.setItem("task-list",JSON.stringify(taskList))
    localStorage.setItem("priority-list",JSON.stringify(prioList))
    display(taskList)
}
console.log(Date.now())
