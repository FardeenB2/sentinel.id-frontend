//import Header from "../components/header.jsx";
import facebookLogo from "../assets/facebookLogo.png";
import linkedin from "../assets/linkedin.png";
import googleLogo from "../assets/googleLogo.png";
import { Link } from 'react-router-dom';



function Login() {

    return (
    <>

        <div className="techsidebody">
        <div className="body">
            <div className = "centercircuitbg">           
                
                <div className = "inputs">
                    <input id="usernameInputBox" placeholder="Username/Email Address"/>  
                    <input id="passwordInputBox" placeholder="Password"/>
                </div>


                <div className = "memory">
                    <div className = "remember">
                    <input type="checkbox" id="rememberMeBOX"/>
                    <label htmlFor="rememberMe" id="rememberMe"> Remember Me</label>
                    </div>
                    <Link to= "/forgotpw" id="forgotPass"> Forgot Password?</Link>
                </div>


                <div className = "log">

                    <Link to= "/login">
                    <button type="button" id="logbutton"> Log-In </button> 
                    </Link> 
                        <p className="orLoginWith"> Or log in with:</p><br></br>

                        <div className ="loginOptions"> 
                        <img src= {facebookLogo} alt="facebook logo"></img>
                        <img src= {linkedin} alt="linkedin logo"></img>
                        <img src= {googleLogo} alt="google logo"></img>
                        </div>

                <p className="newUser">New User?</p>
                <Link to= "/register" id="signup">Sign up for free</Link>

                </div>
            </div>
        </div>
        </div>



  </>

    )
}

export default Login



