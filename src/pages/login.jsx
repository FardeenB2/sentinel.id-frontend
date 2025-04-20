//import Header from "../components/header.jsx";
import facebookLogo from "../assets/facebookLogo.png";
import linkedin from "../assets/linkedin.png";
import googleLogo from "../assets/googleLogo.png";
import { Link } from 'react-router-dom';



function Login() {



    return (
    <>

        <div className="techbodyparent">
            <div className="techsidebodyleft"> </div>
            <div className="techsidebodyright"> </div>
            
        </div>

        <div className="body">
            <div className = "centercircuitbg">

         
                <div className="content">

                    <div className = "inputs">
                        <input id="usernameInputBox" placeholder="Username/Email Address"/>  
                        <input type ="password" id="passwordInputBox" placeholder="password"/>
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
                            <img src= {facebookLogo} alt="facebook logo" className="smlogos"></img>
                            <img src= {linkedin} alt="linkedin logo" className="smlogos"></img>
                            <img src= {googleLogo} alt="google logo" className="smlogos"></img>
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



