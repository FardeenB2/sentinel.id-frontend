import './index.css'
import settingslogo from "./assets/settingslogo.png";
import sentlogo from "./assets/sentlogo.png";

function Header() {

  return (
    <>
      <img src= {settingslogo} alt="settings logo"/>

      <div className="titleBlock">
        <img src= {sentlogo} alt="sentinel logo"/>
        <h1> Sentinel.ID </h1>
      </div>

      <div className = "inputs">
        <input id="usernameInputBox"/>  
        <input id="passwordInputBox"/>
      </div>

      <div className = "memory">
        <input type="checkbox" id="rememberMe"/>
        <label for="rememberMe"> Remember Me</label>
        <a href = "index.html"> Forgot Password?</a>
      </div>

      <button type="button"> Log in</button>

      <p className="orLoginWith"> Or log in with:</p><br></br>

      <div className ="loginOptions"> 
        <img src= "/assets/facebookLogo.png" alt="facebook logo"></img>
        <img src= "/assets/linkedin.png" alt="linkedin logo"></img>
        <img src= "/assets/googleLogo.png" alt="google logo"></img>
      </div>

      <p className="newUser">New User?</p>
      <a href = "index.html">Sign up for free</a>



  
  
  </>

  )


}



function App() {
  return (
    <Header />
   
  )
}

export default App
