import axios from "axios"
export function postApi(data){
    return axios.post(` http://localhost:3000/list`,data)
}
export function getApiData(page){
    return axios.get(`http://localhost:3000/list`,{
        params:{
            _limit:2,
            _page:page
        }
    })
}
export function updateApiData(id,data){
    return axios.patch(`http://localhost:3000/list/${id}`,{status:data})
}
export function deleteApiData(id){
    return axios.delete(`http://localhost:3000/list/${id}`,)
}