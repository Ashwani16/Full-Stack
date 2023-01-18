// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
function displayBalance(balance){
    document.querySelector("#wallet").innerText=balance
}
displayBalance(localStorage.getItem("amount"))
 let i;
 let key="86498f88";
function display(){
    if(i!=undefined){
        clearTimeout(i)
    }
    i=setTimeout(getData,1000)
}
async function getData(){
    let s=document.querySelector("#search").value;
    let res=await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${s}`)
    let {Search}=await res.json();
  if(Search!=undefined){
    append(Search)
  }
    console.log(Search)
}let movie=document.querySelector("#movies")
function append(arr){
    movie.innerHTML=""
    arr.forEach(({Title,Poster}) => {
       let div=document.createElement("div");
       let img=document.createElement("img");
       img.src=Poster;
       let name=document.createElement("h3");
       name.innerText=Title;
       let button=document.createElement("button")
       button.setAttribute("id","book_now");
       button.innerText="Book Now"
       button.addEventListener("click",()=>{
        bookNow({Title,Poster})
       })
       div.append(img,name,button)
       movie.append(div)
    });
 
}
function bookNow(obj){
    localStorage.setItem("movie",JSON.stringify(obj))
    window.location.href="./checkout.html"
}