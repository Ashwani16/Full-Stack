let names=document.querySelector("#names")
let i;
function append(fun,time){
    
 if(i!=undefined){
    clearTimeout(i)
 }
   i=setTimeout(fun,time)
}
async function getData(){
    try {
       
        let s=document.querySelector('input').value;
        let res= await fetch(`https://swapi.dev/api/people/?search=${s}`)
        let data = await res.json();
        if(data.results!=undefined){
            display(data.results)
        }
        
    } catch (error) {
        console.log("error- ",error)
    }
}
function display(array){
   
    names.innerHTML="";
    array.forEach(element => {
        let name=document.createElement("p")
        name.innerText=element.name
        name.addEventListener("click",function(){
            localStorage.setItem("person",JSON.stringify(element))
            window.location.href="./info.html"
        })
        names.append(name)
    });
}