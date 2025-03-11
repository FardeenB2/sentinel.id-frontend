import './index.css'
import settingslogo from "./assets/settingslogo.png";
import sentlogo from "./assets/sentlogo.png";
import facebookLogo from "./assets/facebookLogo.png";
import linkedin from "./assets/linkedin.png";
import googleLogo from "./assets/googleLogo.png";


//NOTE: import the rest of the assets and fix the img src's here.



function Header() {

  return (
    <>
      <div class="uppersection">
      <img src= {settingslogo} alt="settings logo" id="settingslogo"/>
      </div>

      <div className="titleBlock">
        <img src= {sentlogo} alt="sentinel logo" id="sentlogo"/>
        <h1 className="title"> Sentinel.ID </h1>
      </div>

      <div className = "inputs">
        <input id="usernameInputBox"/>  
        <input id="passwordInputBox"/>
      </div>

      <div className = "memory">
        <div className = "remember">
          <input type="checkbox" id="rememberMeBOX"/>
          <label for="rememberMe" id="rememberMe"> Remember Me</label>
        </div>
          <a href = "index.html" id="forgotPass"> Forgot Password?</a>
      </div>


      <div className = "log">

        <button type="button" id="logbutton"> Log in</button>
        <p className="orLoginWith"> Or log in with:</p><br></br>

        <div className ="loginOptions"> 
          <img src= {facebookLogo} alt="facebook logo"></img>
          <img src= {linkedin} alt="linkedin logo"></img>
          <img src= {googleLogo} alt="google logo"></img>
        </div>

      </div>

      <p className="newUser">New User?</p>
      <a href = "index.html" id="signup">Sign up for free</a>



  
  
  </>

  )


}



function App() {
  return (
    <Header />
   
  )
}

export default App
