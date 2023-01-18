// Write code for the Progress page here 
// Write code related to dashboard page here
let doneList=JSON.parse(localStorage.getItem("done-list"))||[]
let prioList=JSON.parse(localStorage.getItem("priority-list"))||[]
display(prioList)

function display(arr){
    document.querySelector("tbody").innerHTML="";
   
   
    arr.forEach((e,i) => {
       
        let tr=document.createElement("tr");
        let name= document.createElement("td");
        name.innerText=e.name;
        let desc= document.createElement("td");
        desc.innerText=e.desc;
        let start= document.createElement("td");
        start.innerText=e.nastartme;
        let end= document.createElement("td");
        end.innerText=e.end;
        let priority= document.createElement("td");
        priority.innerText=e.priority;
        let add= document.createElement("td");
        add.innerText="add";
        add.addEventListener("click",function(){
            addTo(i,e)
        })
        
        tr.append(name,desc,start,end,priority,add)
        document.querySelector("tbody").append(tr)
    });
    
}
function addTo(i,obj){
    prioList.splice(i,1);
    doneList.push(obj)
    localStorage.setItem("done-list",JSON.stringify(doneList))
    localStorage.setItem("priority-list",JSON.stringify(prioList))
    display(prioList)
}
