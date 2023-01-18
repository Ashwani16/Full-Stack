let form=document.querySelector("form")
form.addEventListener("submit",addto)
let arr;
if(localStorage.getItem("arr")==null){
    arr=[];
}else{
    arr=JSON.parse(localStorage.getItem("arr"));
}
display(arr)
console.log(arr)
function addto(e){
    e.preventDefault();
    let obj={
        task:form.task.value,
        priority:form.priority.value
    }
    console.log(obj)
    arr.push(obj);
    localStorage.setItem("arr",JSON.stringify(arr))

    display(arr);

}

function display(arr){
document.querySelector("tbody").innerHTML=""
arr.forEach(function(e,i){
    let tr=document.createElement("tr")
    let task=document.createElement("td")
    task.innerText=e.task;
    let priority=document.createElement("td")
    priority.innerText=e.priority;
    let del=document.createElement("td")
    del.innerText="Delete";
    del.addEventListener("click",function(){
        delet(i);
    });
    tr.append(task,priority,del)
    document.querySelector("tbody").append(tr)
});

}
function delet(i){
    arr.splice(i,1);
    localStorage.setItem("arr",JSON.stringify(arr))
    display(arr)
}


