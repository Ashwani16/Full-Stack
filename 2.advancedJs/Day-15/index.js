localStorage.removeItem("admin")//json-server --watch db.json
async function register(){
    let regData={
        user:document.querySelector("#user_name").value,
        password:document.querySelector("#user_pass").value
    }
    let res=await fetch(`http://localhost:3000/users`,
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
    let res=await fetch(`http://localhost:3000/users`)
    let data=await res.json()
    let check=false;
    data.forEach((e) => {
        if((C_password===e.password) && (C_user===e.user)){
            check=true;
            localStorage.setItem("userId",e.id)
        }
    });
    if(check){
        if(C_password=="1234" && C_user=="admin"){
            localStorage.setItem("admin",true)
        }else{
            localStorage.setItem("admin",false)
        }
        console.log("succesfully SignIn");

        window.location.href="./home.html"
    }else{
        alert("invalid Details")
    }
   
}


