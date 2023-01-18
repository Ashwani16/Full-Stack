


document.querySelector("form").addEventListener("submit",addToDo)
let arr=[];
function addToDo(event){
    event.preventDefault()
    let task= document.querySelector("#task").value
    let prio= document.querySelector("#priority").value
   //console.log(task,prio)
    let obj={
        name:task,
        pri:prio
    }
    arr.push(obj)
    
    display(arr)
}


function display(arr){
    document.querySelector("tbody").innerHTML ="";
    arr.forEach(function (element){
        
         let row= document.createElement("tr");
        let taskr=document.createElement("td");
        let prior=document.createElement("td");
        let delr=document.createElement("td");
        taskr.innerText=element.name;
        
        prior.innerText=element.pri;
        delr.innerText="DELETE";
        delr.style.color="red"
        if(prior.innerText == "High"){
            prior.style.backgroundColor="red"
        }else{
            prior.style.backgroundColor="green"
        }
        delr.addEventListener("click",function(event){
            event.target.parentNode.remove();  
            
        })
        row.append(taskr,prior,delr);
        document.querySelector("tbody").append(row) 
    });
    
    
}

//console.log(arr)



