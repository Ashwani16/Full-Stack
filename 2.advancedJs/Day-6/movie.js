let key="86498f88";
let s="avenger";

async function getdata(){
    try{
        s=document.querySelector("input").value;
        let res=await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${s}`);
        let data=await res.json()
        arr=data.Search
        display(arr)
    }catch{
        console.log("data not found")
        let img=document.createElement("img")
        img.src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000";
        container.append(img)
    }
}
let container=document.querySelector("#container")
function display(array){
    container.innerHTML=""
    console.log(array)
    array.forEach(e => {
        let div=document.createElement("div");
        let img=document.createElement("img")
        img.src=e.Poster;
        let name=document.createElement("h2");
        name.innerText=e.Title;
        let year=document.createElement("p");
        year.innerText=e.Year;
        div.append(img,name,year) 
        container.append(div)
    });
}
function hl(){
    let fake_arr=[...arr]
    console.log(fake_arr)
    fake_arr=fake_arr.sort((a,b)=>{
        return +a.Year-+b.Year;
    })
    display(fake_arr)
}
function lh(){
    let fake_arr=[...arr]
    console.log(fake_arr)
    fake_arr=fake_arr.sort((b,a)=>{
        return +a.Year-+b.Year;
    })
    display(fake_arr)
}
function filtr(){
    let value=document.querySelector("#filtr").value
    let fake_arr=arr.filter((e)=>{
        return +e.Year>=+value
    })
    display(fake_arr)
}