async function register(){
    let regData={
        user:document.querySelector("#user_name").value,
        password:document.querySelector("#user_pass").value
    }
    let res=await fetch(`http://localhost:3000/user`,
        {
            method:"POST",
            body:JSON.stringify(regData),
            headers:{
                'Content-Type':"application/json"
            }
        }
    )
    alert("succesfully registered")
    let data=await res.json()
}
async function signIn(){
    let C_user=document.querySelector("#SignIn_name").value
    let C_password=document.querySelector("#SignIn_pass").value
    let res=await fetch(`http://localhost:3000/user`)
    let data=await res.json()
    let check=false;
    data.forEach((e) => {
        if((C_password===e.password) && (C_user===e.user)){
            check=true;
        }
    });
    if(check){
        console.log("succesfully SignIn");
        window.location.href="../Day-13/index.html"
    }else{
        alert("invalid Details")
    }
   
}

