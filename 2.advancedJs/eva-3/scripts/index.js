// Store the wallet amount to your local storage with keydocum
function displayBalance(balance){
    document.querySelector("#wallet").innerText=balance
}
function addToWallet(){
    let amount=document.querySelector('#amount').value;
    balance+=+amount;
    localStorage.setItem("amount",balance)
    displayBalance(balance);
}
document.querySelector("#add_to_wallet").addEventListener("click",addToWallet)
let balance=0
displayBalance(balance)
document.querySelector('#book_movies').addEventListener("click",()=>{
    window.location.href="./movies.html";
})
