//store the products array in localstorage as "products"
let products=JSON.parse(localStorage.getItem("products"))||[];

let form=document.querySelector("#products");
document.querySelector("#add_product").addEventListener("click",addToPro);

document.querySelector("#show_products").addEventListener("click",function(){
    window.location.href="./inventory.html"
});
function addToPro(){
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    let obj= new crtObj(type,desc,price,image)
    //console.log(obj)
    products.push(obj);
    localStorage.setItem("products",JSON.stringify(products))
}

function crtObj(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i
}