let form=document.querySelector("form");

form.addEventListener("submit",addData);
function addData(e){
    e.preventDefault();
    let obj={
        name:form.name.value,
        docID:form.docID.value,
        dept:form.dept.value,
        exp:form.exp.value,
        email:form.email.value,
        mbl:form.mbl.value
    }
    //console.log(obj)
    display(obj)
}

function display(obj){
    let tr=document.createElement("tr")
    let name=document.createElement("td")
    name.innerText=obj.name;
    let docID=document.createElement("td")
    docID.innerText=obj.docID
    let dept=document.createElement("td")
    dept.innerText=obj.dept;
    let exp=document.createElement("td")
    exp.innerText=obj.exp;
    let email=document.createElement("td")
    email.innerText=obj.email;
    let mbl=document.createElement("td")
    mbl.innerText=obj.mbl;
    let role=document.createElement("td");
    role.innerText=Isrole(obj.exp);
    let del=document.createElement("td")
    del.innerText="Delete";
    del.addEventListener("click",function(event){
        event.target.parentNode.remove();
    })
    tr.append(name,docID,dept,exp,email,mbl,role,del);
    document.querySelector("tbody").append(tr)
}

function Isrole(exp){
    if(exp>5){
        return "Senior"
    }else if(exp>=2){
        return "Junior"
    }else {
        return "Fresher"
    }
}

