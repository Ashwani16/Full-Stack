import LoadingIndicator from "./LoadingIndicator";
import {useEffect,useState} from "react"
function getData(){
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`).then((res)=>{return res.json()})
}
function Countries() { 
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])

  useEffect(()=>{
    getData().then((res)=>{
      console.log(res)
    })
    //console.log(data)
  },[])


  return <LoadingIndicator />;

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
      </div>
      <div>
        {/* Pagination */}
      </div>
    </div>
  );
}

export default Countries;
