function sidebar(){
    return `<img id="image" src="" alt="">
    <h3 id="name"></h3>
    <p id="email"></p>
    <h3 id="country"></h3>`
}
function setside(){
    let user=JSON.parse(localStorage.getItem("user"))
    document.querySelector("#image").src=user.image
    document.querySelector("#name").innerText=user.name
    document.querySelector("#email").innerText=user.email
    document.querySelector("#country").innerText=user.country
}
export {sidebar,setside}