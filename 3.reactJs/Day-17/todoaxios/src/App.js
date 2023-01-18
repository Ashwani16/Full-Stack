
import { useState } from 'react';
import './App.css';
import AddTo from "./components/AddTo.js"
import List from "./components/List.js"
function App() {
  const [reload,setreload]=useState(true)

  return (
    <div className="App">
      <h1>To Do App</h1>
      <AddTo reload={reload} setreload={setreload} />
      <List reload={reload} />
    </div>
  );
}

export default App;
