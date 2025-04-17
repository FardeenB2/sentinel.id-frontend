import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/header.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Forgotpw from "./pages/forgotpw.jsx";
import Settings from "./pages/settings.jsx";

//Header will appear in all places as it is outside <Routes>
//need to have a default "/" route

function App() {
  return (
  <>

      <BrowserRouter>

        <Header />  

        <div className="body">
          <Routes> 

            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpw" element={<Forgotpw />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>    

        </div>
 
      </BrowserRouter>

  </>
  )
  
}

export default App
