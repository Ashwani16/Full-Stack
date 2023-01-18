// Write all the Javascript here
let form=document.querySelector("form");
form.addEventListener("submit",addProduct);
let total=document.querySelector("#total-price");
let totalPrice=0
function addProduct(e){
    e.preventDefault();
     let obj={
        name:form.name.value,
        category:form.category.value,
        brand:form.brand.value,
        price:form.price.value,
        deliveredBy:form.deliveredBy.value
     }
    // console.log(obj)
     if((obj.name==""||obj.category===""||obj.brand===""||obj.price===""||obj.deliveredBy==="")){
       
        alert("please fill all fields")
     }else{
        display(obj)
     }
   
}
function display(obj){
    let tr=document.createElement("tr");
    let name=document.createElement("td");
    name.innerText=obj.name;
    let category=document.createElement("td");
    category.innerText=obj.category;
    let brand=document.createElement("td");
    brand.innerText=obj.brand;
    let price=document.createElement("td");
    price.innerText=obj.price;
    price.setAttribute("class","price")
    totalPrice+=+obj.price
    total.innerText="Total Price:- "+totalPrice
    let deliveredBy=document.createElement("td");
    deliveredBy.innerText=obj.deliveredBy;
    let priceSeg=document.createElement("td");
    priceSeg.innerText=exp(obj.price);
    let del=document.createElement("td");
    del.innerText="Delete";
    del.addEventListener("click",function(e){
        e.target.parentNode.setAttribute("id","Price")
        let n=document.querySelector("#Price>.price").innerText
      // console.log(document.querySelector("#Price>.price").innerText)
     //console.log(e.target.parentNode)
     totalPrice-=+n
        total.innerText="Total Price:- "+totalPrice
       e.target.parentNode.remove()
    })
    tr.append(name,category,brand,price,deliveredBy,priceSeg,del);
    document.querySelector("tbody").append(tr);
    
}
function exp(p){
    if(p>1000){
        return "Expensive"
    }else {
        return "Non-Expensive"
    }
}