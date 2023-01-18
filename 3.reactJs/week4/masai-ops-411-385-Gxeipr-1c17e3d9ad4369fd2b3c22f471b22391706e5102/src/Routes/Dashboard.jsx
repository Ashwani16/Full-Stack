import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";
function Dashboard() {
  const {token,setIsAuth,setToken}=useContext(AuthContext)
  
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  const [isLoading,setIsLoading]=useState(true)
  const [orderBy,setOrderBy]=useState("asc")
  const [total,setTotal]=useState(1)
  useEffect(()=>{
    setIsLoading(true)
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=${orderBy}`)
    .then((res)=>{
      res.json().then((res)=>{
        
        setData(res.data)
        setIsLoading(false)
        setTotal(res.totalPages)
      })
    })
  },[page,orderBy])
  console.log(data)
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={()=>{setIsAuth(false)
            setToken(null)
            console.log("sg")
        }} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token.token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button disabled={orderBy==="asc"} onClick={()=>{setOrderBy("asc")}} data-testid="low-to-high">Sort low to high</button>
      <button disabled={orderBy==="desc"} onClick={()=>{setOrderBy("desc")}} data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      <Pagination total={total} page={page} setPage={setPage} />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLoading?<Loader />:<ProductList data={data} />}
        
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;
