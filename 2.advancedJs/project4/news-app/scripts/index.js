/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function signUp(){
    let obj={
        
            name: document.querySelector("#name").value,
            image: document.querySelector("#Image").value,
            email: document.querySelector("#email").value,
            country:  document.querySelector("#country").value  
    }
    localStorage.setItem("user",JSON.stringify(obj))
}
