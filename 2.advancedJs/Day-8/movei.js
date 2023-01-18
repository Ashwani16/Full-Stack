let key="86498f88";
let show=document.querySelector("#show")
let clicked=document.querySelector("#clicked")
let i;
async function showFunc(){
    try {
        let s=document.querySelector("input").value
        let res= await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${s}`)
        let data= await res.json()
        if(data.Search!=undefined){
            display(data.Search)
            console.log(data.Search)
        }
    } catch (error) {
        console.log("err-",error)
    }
}
function debounce(fun,time){
    if(i){
        clearTimeout(i)
    }
    i=setTimeout(fun,time)
}

function display(array){
    show.innerHTML=""
    show.style.height="250px"
    array.forEach(e => {
        let name=document.createElement("p");
        name.innerText=e.Title
        name.addEventListener("click",function(){
            displayMovie(e)
        })
        show.append(name)
    });
}
function displayMovie(e){
    clicked.innerHTML=""
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=e.Poster
    let name=document.createElement('h2')
    name.innerText=e.Title
    let year=document.createElement('p')
    year.innerText=e.Year
    div.append(img,name,year)
    clicked.append(div)


}