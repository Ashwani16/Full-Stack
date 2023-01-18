// All the JS Code for the Add Students Page Goes Here
let admission=JSON.parse(localStorage.getItem("admission"))|| [];

let form=document.querySelector("#form");

form.addEventListener("submit",addList)

function addList(){
    event.preventDefault()
    let obj={
        name:form.name.value,
        email:form.email.value ,
        phone:form.phone.value ,
        gender:form.gender.value ,
        course:form.course.value
    }
    admission.push(obj)
    console.log(admission)
    localStorage.setItem("admission",JSON.stringify(admission))
}