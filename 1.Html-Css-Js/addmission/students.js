let admission=JSON.parse(localStorage.getItem("admission"))|| [];
let acceptAdd=JSON.parse(localStorage.getItem("admission-accepted"))|| [];
let rejectAdd=JSON.parse(localStorage.getItem("admission-rejected"))|| [];
display(admission)
document.querySelector("#filter").addEventListener("change",function(){
    let value=document.querySelector("#filter").value;
    if(value!="all"){
        let arr=admission.filter(e=>{
            return e.course==value;
        })
        display(arr)
    }else{
        display(admission)

    }
    
})

function display(arr){
    let body=document.querySelector("tbody");
    body.innerHTML=""
    arr.forEach((e,i) => {
        let tr=document.createElement("tr");
        let name=document.createElement("td");
        name.innerText=e.name;
        let email=document.createElement("td");
        email.innerText=e.email
        let phone=document.createElement("td");
        phone.innerText=e.phone
        let gender=document.createElement("td");
        gender.innerText=e.gender
        let course=document.createElement("td");
        course.innerText=e.course
        let accept=document.createElement("td");
        accept.innerText="Accept";
        accept.addEventListener("click",function(){
            acceptAdd.push(e)
            admission.splice(i,1)
            localStorage.setItem("admission",JSON.stringify(admission))
            display(admission)
            localStorage.setItem("admission-accepted",JSON.stringify(acceptAdd))
        })
        let reject=document.createElement("td");
        reject.innerText="Reject";
        reject.addEventListener("click",function(){
            rejectAdd.push(e)
            admission.splice(i,1)
            localStorage.setItem("admission",JSON.stringify(admission))
            display(admission)
            localStorage.setItem("admission-rejected",JSON.stringify(rejectAdd))
        })
        tr.append(name,email,course,gender,phone,accept,reject)
        body.append(tr)
    });
}

