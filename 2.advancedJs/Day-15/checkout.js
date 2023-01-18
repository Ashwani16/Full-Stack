let admin=localStorage.getItem("admin");
if(admin==undefined){
    window.location.href="./Sign_in_Up.html"
}
async function getData(){
    let id=localStorage.getItem("userId");
    console.log(id)
    let res=await fetch(`http://localhost:3000/checkout`)
    res=await res.json();
    res=res.filter((e)=>{
        return e.userid==id
    })
    console.log(res)
    getProduct(res)
}
getData()
let delIds=[]
async function getProduct(array){
    
    let res=await fetch(`http://localhost:3000/products`)
    res=await res.json();
    console.log(res)
    res=res.filter((e)=>{
        let an=false
        
        for (let index = 0; index < array.length; index++) {
            
            const element = array[index];
            if(+element.productsid==+e.id){
                an= true;
                delIds.push(element.id)
            }
            
        }
        return an
    })
    console.log(res,delIds)
    display(res,delIds)
}
function display(arr){
    let show_Pro=document.querySelector("#showPro")
    show_Pro.innerHTML="";
    arr.forEach(({image_url,name,rating,description,price,id},i) => {
        let div=document.createElement("div");
             let div1=document.createElement("div");
                 let img=document.createElement("img");
                     img.src=image_url;
            div1.append(img);
            let div2=document.createElement("div");
                let name1=document.createElement("h1");
                 name1.innerText=name;
                  let description1=document.createElement("p");
                 description1.innerText=description;
             div2.append(name1,description1);

            let div3=document.createElement("div");
                  let rating1=document.createElement("p");
                       rating1.innerText=rating;
                  let price1=document.createElement("p");
                     price1.innerText=price;
                     let delit=document.createElement("button");
                     delit.innerText="DELETE";
                     delit.addEventListener("click",()=>{
                         delData(delIds[i])
                         
                     })
            div3.append(rating1,price1,delit)
            
        div.append(div1,div2,div3)
        show_Pro.append(div);
    });
}
async function delData(id){
    let res= await fetch(`http://localhost:3000/checkout/${id}`,
    {
        method:"DELETE",
       
        headers:{
            'Content-Type':"application/json"
        }

    })

    console.log(await res.json())
}