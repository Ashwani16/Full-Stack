import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Allroutes from './components/AllRoutes';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Allroutes/>
    </div>
  );
}

export default App;
