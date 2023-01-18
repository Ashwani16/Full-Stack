// fill in javascript code here 
let data=[];
let form=document.querySelector("form")
form.addEventListener("submit",addrecord)
function addrecord(event){
    event.preventDefault();
    //console.log(form.name.value)
    obj={
        name:form.name.value,
        employeeID:form.employeeID.value,
        department:form.department.value,
        exp:form.exp.value,
        email:form.email.value,
        mbl:form.mbl.value,
    }
   // console.log(obj)
  //data.push(obj)
  display(obj)
}

function display(obj){
     let row= document.createElement("tr");
     let name=document.createElement("td");
     let employeeID=document.createElement("td");
     let department=document.createElement("td");
    let exp=document.createElement("td");
     let email=document.createElement("td");
     let mbl=document.createElement("td");
     let roled=document.createElement("td");
     let delet=document.createElement("td");
    name.innerText=obj.name;
    employeeID.innerText=obj.employeeID;
    department.innerText=obj.department;
    exp.innerText=obj.exp;
console.log(obj.department)
    email.innerText=obj.email;
    mbl.innerText=obj.mbl;
    roled.innerText=role(obj.exp)
    delet.innerText="DELETE";
    delet.addEventListener("click",function(event){
        event.target.parentNode.remove()
    })
    row.append(name,employeeID,department,exp,email,mbl,roled,delet)
    document.querySelector("tbody").append(row)
}

function role(exp){
    if(exp<=1){
        return "Fresher"
    }else if(exp<=5){
        return "Junior"
    }else{
        return "Senior"
    }
}