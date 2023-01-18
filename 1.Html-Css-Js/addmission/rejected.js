
let rejectAdd=JSON.parse(localStorage.getItem("admission-rejected"))|| [];

display(rejectAdd)

console.log(rejectAdd)

function display(arr){
    
    let body=document.querySelector("tbody");
    body.innerHTML=""
    arr.forEach(e => {
        
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
        
        tr.append(name,email,course,gender,phone)
        body.append(tr)
    });
}