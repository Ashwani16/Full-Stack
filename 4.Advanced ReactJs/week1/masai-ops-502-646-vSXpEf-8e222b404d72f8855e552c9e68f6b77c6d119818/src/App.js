import { useReducer,useEffect } from "react";
import "./App.css";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import axios from "axios"
import { Get_Req, Get_Succ } from "./actionCreators";
import ProductCard from "./Components/ProductCard";

function App() {
  //DO NOT USE use useState;
  //use the useReducer function here; import the reducer function from reducer.js and initial state variable from initialState.js here, for useReducer arguments.
  const [reducerState, dispatch] = useReducer(reducer,initialState);
  const {isLoading,isError,data}=reducerState;
  useEffect(()=>{
    dispatch(Get_Req())
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    .then((res)=>{
      console.log(res.data.data);
      dispatch(Get_Succ(res.data.data))
    })
  },[])
  console.log(isLoading,isError,data)
  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCTS</h1>
          <div>Welcome to the RCT-211-B22 E1 Evaluation</div>

          {/* If the application is in the loading state, show the below div else not */}
          {isLoading&&<div data-tesid="loading">Loading...</div>}

          {/* If there is any error while fetching the data from the API, show the below div, else not */}
          {isError&&<div data-testid="error" style={{ color: "red" }}>
            Error in fetching details
          </div>}
          {data.map((e)=>{
            return <ProductCard key={e.id} data={e}/>
          })}
          {/* Map through the products data, here, by passing the data to the ProductCards component */}
        </div>
      </div>
    </div>
  );
}

export default App;
