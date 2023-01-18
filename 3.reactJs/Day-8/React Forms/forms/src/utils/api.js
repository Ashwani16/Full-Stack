function getfromapi({page,filterby,sortby}){
    console.log(filterby,"in getapi")
    console.log(`http://localhost:3000/posts?_page=${page}&_sort=salary&_order=${sortby}&_department=${filterby}`)
    return fetch(`http://localhost:3000/posts?_page=${page}&_sort=salary&_order=${sortby}&_department=${filterby}`).then((res)=>{
      return res.json();
    })
   }
   function setToapi(data){
    return fetch(`http://localhost:3000/posts`,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
          'Content-Type':"application/json"
      }
    })
   }
   function delFromApi(id){
    return fetch(`http://localhost:3000/posts/${id}`,{
      method:"DELETE",
      headers:{
          'Content-Type':"application/json"
      }
    })
   }
export {getfromapi,setToapi,delFromApi}  