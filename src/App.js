import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter } from 'react-router-dom';
import Login from './components/auth/login/login'
import React from "react";
function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Login></Login>
    </div>
      </BrowserRouter>
  );
}

export default App;
