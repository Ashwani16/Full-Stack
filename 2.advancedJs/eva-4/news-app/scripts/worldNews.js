document.querySelector("#search").addEventListener("keypress",search);

function search(e){
    if(e.key=="Enter"){
        let value=document.querySelector("#search").value;
        console.log(value)
        getData()
    }
    
    
}