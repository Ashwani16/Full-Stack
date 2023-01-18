let container=document.querySelector("#container");

let getData=async ()=>{
    let s=document.querySelector("input").value;
    let key="AIzaSyB0Xz1DN1woY6n5emW1GffjPTCOQeag-Y0";
    let res=await fetch(`https://www.googleapis.com/youtube/v3/search?q=${s}&key=${key}&maxResults=19`)
    console.log(await res.json())
}
