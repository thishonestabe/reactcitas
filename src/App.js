import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter } from 'react-router-dom';
//import Login from './components/auth/login/login'
import Register from './components/auth/register/register'
import React from "react";
function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Register></Register>
    </div>
      </BrowserRouter>
  );
}

export default App;
