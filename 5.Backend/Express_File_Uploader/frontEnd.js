import axios from "axios"
document.querySelector(".uploader").addEventListener("change",changeHandler)
 function changeHandler(e){
    console.log(e)
axios.post("http://localhost:8080/upload",e.target.files[0]).then((res)=>{
  console.log(res)
})}
