let key="4fcb3f615bdfb85433225dd738652c70"
let container=document.querySelector("#container")
navigator.geolocation.getCurrentPosition(async function(e){
    console.log(e)
    let lat=e.coords.latitude
    let lon=e.coords.longitude
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}units=metric`)
    let data=await res.json()
    console.log(data)
    display(data)
})
async function getdata(){
    try {
        let city=document.querySelector("#city").value
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
   let res2=await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=8&appid=${key}&units=metric`)
    let data=await res.json()
    let data2=await res2.json()
    console.log(data2)
    console.log(data)
    display(data)
    } catch (error) {
        console.log(error)
    }
}
function display(data){
    container.innerHTML="";
    let name=x("p")
    name.innerText=`city -${data.name}`

    let min_temp=x("p")
    min_temp.innerText=`Min Temp- ${data.main.temp_min}`;
    let max_temp=x("p")
    max_temp.innerText=`Max Temp${data.main.temp_max}`;
    let wind=x("p")
    wind.innerText=`speed- ${data.wind.speed}`;
    let cloud="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4qmruwHgqWYYMsrxAm-97FwqflTnjUguuQ&usqp=CAU"
    if(data.clouds==0){
        cloud="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtGY-v8vzTMVmQ_A6BljsasS5TmBKtgzhdg&usqp=CAU"
    }
    let clouds=x("img");
    clouds.src=cloud
    let sunriceLogo=x('img')
    sunriceLogo.src="data:image/png;base64,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"
    let sunrice=x("p")
    sunrice.innerText=data.sys.sunrise
    let sunsetLogo=x('img')
    sunsetLogo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhVKivafklSOxyRH8pyFOa19B8HSbaS4PUg&usqp=CAU"
    let sunset=x("p")
    sunset.innerText=data.sys.sunset
    container.append(name,min_temp,max_temp,clouds,wind,sunriceLogo,sunrice,sunsetLogo,sunset)

}
function x(a){
    return document.createElement(a)
}