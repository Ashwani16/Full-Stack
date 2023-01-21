// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
function displayBalance(balance){
    document.querySelector("#wallet").innerText=balance
}
document.querySelector("#confirm").addEventListener("click",confirm)
displayBalance(localStorage.getItem("amount")) 
function append({Title,Poster}){
    movie.innerHTML=""
       let div=document.createElement("div");
       let img=document.createElement("img");
       img.src=Poster;
       let name=document.createElement("h3");
       name.innerText=Title;
       div.append(img,name)
       movie.append(div)
}
function confirm(){
    let count=+document.querySelector("#number_of_seats").value;
    let balance=localStorage.getItem("amount")
    if(count*100>balance){
        alert("Insuffisent Balance")
    }else{
        balance-= count*100;
        localStorage.setItem("amount",balance);
        displayBalance(balance)
        alert("Booked Succesfully")
    }
}
append(JSON.parse(localStorage.getItem("movie")))