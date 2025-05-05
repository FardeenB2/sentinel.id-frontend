import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/header.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Forgotpw from "./pages/forgotpw.jsx";
import Settings from "./pages/settings.jsx";
//import Presets from "./components/presets.jsx";
//import Users from "./components/users.jsx";



//Header will appear in all places as it is outside <Routes>
//need to have a default "/" route


function WithHeader({children}) {
  return (
  <>
    <Header />  
    <div className="sidesbody">
      {children}
    </div>
  
  </>

  )

}

function WithoutHeader({children}) {
  return (
    <>

    <div className="sidesbody">
      {children}
    </div>


    </>
  )

}



function App() {
  return (
  <>

      <BrowserRouter>
    
          <Routes> 

            <Route path="/" element={<WithHeader> <Login /> </WithHeader>}  />

            <Route path="/login" element={<WithHeader> <Login /> </WithHeader>} />
            <Route path="/register" element={<WithHeader> <Register /> </WithHeader>} />
            <Route path="/forgotpw" element={<WithHeader> <Forgotpw /> </WithHeader>} />
            <Route path="/settings" element={<WithoutHeader> <Settings /> </WithoutHeader>} />

          </Routes>    

 
      </BrowserRouter>

  </>
  )
  
}

export default App
