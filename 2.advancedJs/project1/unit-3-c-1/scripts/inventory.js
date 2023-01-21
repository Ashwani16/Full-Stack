let products=JSON.parse(localStorage.getItem("products"))||[];
document.querySelector("#add_more_product").addEventListener("click",function(){
    window.location.href="./index.html"
});
display(products)
function display(array){
    let con=document.querySelector("#all_products");
    con.innerHTML=""
    array.forEach((e,i)=> {
        let div=document.createElement("div");
        let type=document.createElement("h2");
        type.innerText=e.type;
        let desc=document.createElement("p");
        desc.innerText=e.desc;
        let price=document.createElement("p");
        price.innerText=e.price;
        let img=document.createElement("img");
        img.src=e.image;
        let remomve=document.createElement("button");
        remomve.innerText="Remove";
        remomve.addEventListener("click",function(){
            del(i);
        })
        div.append(img,type,desc,price,remomve);
        con.append(div)
    });
}
function del(i){
    products.splice(i,1)
    localStorage.setItem("products",JSON.stringify(products))
    display(products)
}