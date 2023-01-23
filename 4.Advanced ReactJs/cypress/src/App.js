import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState("")
  return (
    <div className="App">
      <input className='input' autofocus value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <h1>{value}</h1>
    </div>
  );
}

export default App;
