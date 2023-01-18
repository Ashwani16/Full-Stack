import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable"
import { AuthContext } from "../Context/AuthContext";
function Dashboard() {
  const [data,setData]=useState([])
const {token,logout}=useContext(AuthContext)

function logOut(){
  logout()
}
  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
    .then((res)=>{
      return res.json().then((res)=>{
       // console.log(res)
        setData(res.data)
      })
    })
  },[])
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logOut} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
       
        {/* Products table */}
        <ProductsTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
