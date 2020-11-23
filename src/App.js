import logo from './logo.svg';
import React from "react";
import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter } from 'react-router-dom';
//import Login from './components/auth/login/login'
// import Register from './components/auth/register/register'
import Home from './components/home/home';


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Home></Home>
    </div>
      </BrowserRouter>
  );
}

export default App;
