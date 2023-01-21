// Write code related to Done page here
// Write code for the Progress page here 
// Write code related to dashboard page here
let doneList=JSON.parse(localStorage.getItem("done-list"))||[]

display(doneList)

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
        
        
        tr.append(name,desc,start,end,priority)
        document.querySelector("tbody").append(tr)
    });
    
}

